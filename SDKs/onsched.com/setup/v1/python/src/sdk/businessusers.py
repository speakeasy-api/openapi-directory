import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class BusinessUsers:
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

    
    def delete_setup_v1_businessusers_id_(self, request: operations.DeleteSetupV1BusinessusersIDRequest) -> operations.DeleteSetupV1BusinessusersIDResponse:
        r"""Permanently deletes businessUser object.
        Use this endpoint to permanently delete a businessUser.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/businessusers/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1BusinessusersIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_setup_v1_businessusers(self, request: operations.GetSetupV1BusinessusersRequest) -> operations.GetSetupV1BusinessusersResponse:
        r"""Returns a list of business users.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/businessusers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1BusinessusersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.business_user_list_view_model = out

        return res

    
    def get_setup_v1_businessusers_permissions(self, request: operations.GetSetupV1BusinessusersPermissionsRequest) -> operations.GetSetupV1BusinessusersPermissionsResponse:
        r"""Returns a list of system roles and permission.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/businessusers/permissions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1BusinessusersPermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.business_permission_list_view_model = out

        return res

    
    def get_setup_v1_businessusers_email_companies(self, request: operations.GetSetupV1BusinessusersEmailCompaniesRequest) -> operations.GetSetupV1BusinessusersEmailCompaniesResponse:
        r"""Returns a list of companies for the business user.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/businessusers/{email}/companies", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1BusinessusersEmailCompaniesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthorizedCompanyListViewModel])
                res.authorized_company_list_view_model = out

        return res

    
    def get_setup_v1_businessusers_id_(self, request: operations.GetSetupV1BusinessusersIDRequest) -> operations.GetSetupV1BusinessusersIDResponse:
        r"""Returns a businessUser object.
        The result returned is a single businessUser object. An id is required to find the businessUser. Find businessUser id's using the GET setup/v1/businessuserts end point,
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/businessusers/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1BusinessusersIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BusinessUserViewModel])
                res.business_user_view_model = out

        return res

    
    def post_setup_v1_businessusers(self, request: operations.PostSetupV1BusinessusersRequest) -> operations.PostSetupV1BusinessusersResponse:
        r"""Creates a new businessUser object.
        Use this endpoint to create a new businessUser. If not specified the business location id defaults to the first location in the company.
        Name, Email Address and role are required for creating a new businessUser. If the businessUser is a bookable resource then resourceId is required. 
        For role, use one of the values listed below. Do not include what is shown in brackets, this is there for description of the role only.
        
        Business Roles:
        bizowner (Business Owner)
        bizadmin (Business Administrator)
        bizresource (Business User - Bookable Resource)
        bizclerk (Business User - Portal Booking Privileges)
        bizuser (Business User - Portal View Only Privileges)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/businessusers"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1BusinessusersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BusinessUserViewModel])
                res.business_user_view_model = out

        return res

    
    def put_setup_v1_businessusers_id_(self, request: operations.PutSetupV1BusinessusersIDRequest) -> operations.PutSetupV1BusinessusersIDResponse:
        r"""Updates a businessUser object.
        Use this endpoint to update a businessUser.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/businessusers/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1BusinessusersIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BusinessUserViewModel])
                res.business_user_view_model = out

        return res

    