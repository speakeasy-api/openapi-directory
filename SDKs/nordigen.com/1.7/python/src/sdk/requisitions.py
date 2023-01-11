import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Requisitions:
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

    
    def create_aspsp_authorization_link(self, request: operations.CreateAspspAuthorizationLinkRequest) -> operations.CreateAspspAuthorizationLinkResponse:
        r"""Get links for user redirection.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/requisitions/{id}/links/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAspspAuthorizationLinkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RequisitionLinks])
                res.requisition_links = out

        return res

    
    def create_a_new_requisition(self, request: operations.CreateANewRequisitionRequest) -> operations.CreateANewRequisitionResponse:
        r"""API endpoints related to requisitions.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/requisitions/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateANewRequisitionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Requisition])
                res.requisition = out

        return res

    
    def delete_requisition(self, request: operations.DeleteRequisitionRequest) -> operations.DeleteRequisitionResponse:
        r"""Delete Requisition and all End User Agreements.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/requisitions/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRequisitionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def requisition_by_id(self, request: operations.RequisitionByIDRequest) -> operations.RequisitionByIDResponse:
        r"""API endpoints related to requisitions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/requisitions/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RequisitionByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Requisition])
                res.requisition = out

        return res

    
    def retrieve_all_requisitions(self, request: operations.RetrieveAllRequisitionsRequest) -> operations.RetrieveAllRequisitionsResponse:
        r"""API endpoints related to requisitions.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/requisitions/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RetrieveAllRequisitionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedRequisitionList])
                res.paginated_requisition_list = out

        return res

    