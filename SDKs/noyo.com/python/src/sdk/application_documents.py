import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class ApplicationDocuments:
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

    
    def create_application_document(self, request: operations.CreateApplicationDocumentRequest) -> operations.CreateApplicationDocumentResponse:
        r"""Create new Application Document
        Create a new document submission attached to an application. This endpoint provisions a new document upload and creates a new application document to be attached to the application. Use this endpoint to submit any files not already requested by the application.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/applications/{application_id}/documents", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateApplicationDocumentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ApplicationDocumentResult])
                res.application_document_result = out

        return res

    
    def edit_application_document(self, request: operations.EditApplicationDocumentRequest) -> operations.EditApplicationDocumentResponse:
        r"""Edit an Application Document
        Edit an application document based on the ID provided. The version parameter must match the latest application document version. When the `group_file_id` is not present, this method will update properties and metadata about an existing application document.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/applications/{application_id}/documents/{document_id}/{version}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EditApplicationDocumentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ApplicationDocumentResult])
                res.application_document_result = out

        return res

    
    def get_application_document(self, request: operations.GetApplicationDocumentRequest) -> operations.GetApplicationDocumentResponse:
        r"""Get Application Document
        Returns the latest version of a single application document based on the ID provided.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/applications/{application_id}/documents/{document_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetApplicationDocumentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ApplicationDocumentResult])
                res.application_document_result = out

        return res

    
    def get_application_documents(self, request: operations.GetApplicationDocumentsRequest) -> operations.GetApplicationDocumentsResponse:
        r"""Get all Application Documents
        Get a list of all documents associated with a carrier application.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/applications/{application_id}/documents", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetApplicationDocumentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedApplicationDocumentResult])
                res.paginated_application_document_result = out

        return res

    
    def submit_application_document(self, request: operations.SubmitApplicationDocumentRequest) -> operations.SubmitApplicationDocumentResponse:
        r"""Submit new Application Document
        Each group application will ask for a list of optional or required application documents. This endpoint provisions a new file upload and associates the uploaded file with the existing application document with the given ID. This endpoint can be used to replace a file that you uploaded earlier with a newer version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/applications/{application_id}/documents/{document_id}/{version}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SubmitApplicationDocumentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ApplicationDocumentResult])
                res.application_document_result = out

        return res

    