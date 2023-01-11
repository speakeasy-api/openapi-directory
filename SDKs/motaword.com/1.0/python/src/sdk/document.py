import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Document:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def get_documents(self, request: operations.GetDocumentsRequest) -> operations.GetDocumentsResponse:
        r"""Get a list of your documents
        Get a list of your documents
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/documents"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDocumentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DocumentList])
                res.document_list = out

        return res

    
    def get_similar_documents(self, request: operations.GetSimilarDocumentsRequest) -> operations.GetSimilarDocumentsResponse:
        r"""Find documents similar to this document.
        Find documents similar to this document. Optionally, include translation information.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/documents/{documentId}/similars", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSimilarDocumentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DocumentList])
                res.document_list = out

        return res

    
    def get_user_documents(self, request: operations.GetUserDocumentsRequest) -> operations.GetUserDocumentsResponse:
        r"""Get a list of your documents
        Get a list of your documents
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{userId}/documents", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserDocumentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DocumentList])
                res.document_list = out

        return res

    
    def regenerate_preview(self, request: operations.RegeneratePreviewRequest) -> operations.RegeneratePreviewResponse:
        r"""Regenerate preview and return preview URL for given file
        Regenerate preview and return preview URL for given file
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/documents/{documentId}/regenerate_preview", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RegeneratePreviewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RegeneratePreviewResponse])
                res.regenerate_preview_response = out

        return res

    
    def use_as_draft(self, request: operations.UseAsDraftRequest) -> operations.UseAsDraftResponse:
        r"""Use the translation of given source manual document as manual draft source for the given target document.
        Use the translation of given source manual document as manual draft source for the given target document.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/documents/{documentId}/use_as_draft", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UseAsDraftResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OperationStatus])
                res.operation_status = out

        return res

    
    def use_as_regular(self, request: operations.UseAsRegularRequest) -> operations.UseAsRegularResponse:
        r"""Use the translation of the given manual document as a regular file.
        Use the translation of the given manual document as a regular file.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/documents/{documentId}/use_as_regular", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UseAsRegularResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OperationStatus])
                res.operation_status = out

        return res

    