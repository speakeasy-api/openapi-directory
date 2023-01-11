import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Users:
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

    
    def get_users_v2_devices(self, request: operations.GetUsersV2DevicesRequest) -> operations.GetUsersV2DevicesResponse:
        r"""Gets all devices owned by a given user or project
        Provides an array of the TrackingIds for devices that the given user or project owns.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/v2/devices"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersV2DevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetUsersV2Devices200ApplicationJSON])
                res.get_users_v2_devices_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetUsersV2Devices400ApplicationJSON])
                res.get_users_v2_devices_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetUsersV2Devices401ApplicationJSON])
                res.get_users_v2_devices_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetUsersV2Devices403ApplicationJSON])
                res.get_users_v2_devices_403_application_json_object = out

        return res

    
    def get_users_v2_health(self) -> operations.GetUsersV2HealthResponse:
        r"""Gets service health
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/v2/health"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersV2HealthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetUsersV2Health200ApplicationJSON])
                res.get_users_v2_health_200_application_json_object = out
        elif r.status_code == 500:
            pass

        return res

    
    def get_users_v2_version(self) -> operations.GetUsersV2VersionResponse:
        r"""Gets service version
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/v2/version"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersV2VersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_users_v2_version_200_application_json_any = out
        elif r.status_code == 500:
            pass

        return res

    
    def post_users_v2_login(self, request: operations.PostUsersV2LoginRequest) -> operations.PostUsersV2LoginResponse:
        r"""Gets a valid access token
        Use this to get a valid access token for a given HERE Account email and password.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/v2/login"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUsersV2LoginResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostUsersV2Login200ApplicationJSON])
                res.post_users_v2_login_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostUsersV2Login400ApplicationJSON])
                res.post_users_v2_login_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostUsersV2Login401ApplicationJSON])
                res.post_users_v2_login_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostUsersV2Login403ApplicationJSON])
                res.post_users_v2_login_403_application_json_object = out

        return res

    
    def post_users_v2_refresh(self, request: operations.PostUsersV2RefreshRequest) -> operations.PostUsersV2RefreshResponse:
        r"""Gets a valid access token given a refreshToken
        Use this to get a valid access token for a given HERE Account access token and refresh token.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/v2/refresh"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUsersV2RefreshResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostUsersV2Refresh200ApplicationJSON])
                res.post_users_v2_refresh_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostUsersV2Refresh400ApplicationJSON])
                res.post_users_v2_refresh_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostUsersV2Refresh401ApplicationJSON])
                res.post_users_v2_refresh_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostUsersV2Refresh403ApplicationJSON])
                res.post_users_v2_refresh_403_application_json_object = out

        return res

    