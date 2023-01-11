import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Agreements:
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

    
    def accept_eua(self, request: operations.AcceptEuaRequest) -> operations.AcceptEuaResponse:
        r"""Accept an end-user agreement via the API.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/agreements/enduser/{id}/accept/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AcceptEuaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EndUserAgreement])
                res.end_user_agreement = out

        return res

    
    def create_eua(self, request: operations.CreateEuaRequest) -> operations.CreateEuaResponse:
        r"""API endpoints related to end-user agreements.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/agreements/enduser/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateEuaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EndUserAgreement])
                res.end_user_agreement = out

        return res

    
    def delete_eua_by_id(self, request: operations.DeleteEuaByIDRequest) -> operations.DeleteEuaByIDResponse:
        r"""Delete End User Agreement.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/agreements/enduser/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteEuaByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def retrieve_eua_by_id(self, request: operations.RetrieveEuaByIDRequest) -> operations.RetrieveEuaByIDResponse:
        r"""API endpoints related to end-user agreements.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/agreements/enduser/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RetrieveEuaByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EndUserAgreement])
                res.end_user_agreement = out

        return res

    
    def retrieve_eua_text(self, request: operations.RetrieveEuaTextRequest) -> operations.RetrieveEuaTextResponse:
        r"""Show the text of the end-user agreement.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/agreements/enduser/{id}/text/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RetrieveEuaTextResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def retrieve_all_eu_as_for_an_end_user(self, request: operations.RetrieveAllEuAsForAnEndUserRequest) -> operations.RetrieveAllEuAsForAnEndUserResponse:
        r"""API endpoints related to end-user agreements.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/agreements/enduser/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RetrieveAllEuAsForAnEndUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedEndUserAgreementList])
                res.paginated_end_user_agreement_list = out

        return res

    