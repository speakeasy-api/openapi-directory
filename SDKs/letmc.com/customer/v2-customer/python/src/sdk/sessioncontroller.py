import requests
from sdk.models import operations
from . import utils

class SessionController:
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

    
    def session_controller_change_password(self, request: operations.SessionControllerChangePasswordRequest) -> operations.SessionControllerChangePasswordResponse:
        r"""Change the password of a customer given their existing and new password.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/session/password", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SessionControllerChangePasswordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def session_controller_create_landlord_login(self, request: operations.SessionControllerCreateLandlordLoginRequest) -> operations.SessionControllerCreateLandlordLoginResponse:
        r"""Send a request to the in-tray to create a landlord login.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/session/createlandlordlogin", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SessionControllerCreateLandlordLoginResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def session_controller_get_session_info(self, request: operations.SessionControllerGetSessionInfoRequest) -> operations.SessionControllerGetSessionInfoResponse:
        r"""Gets information about the currently logged on customer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/session", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SessionControllerGetSessionInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.session_controller_get_session_info_200_application_json_string = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.session_controller_get_session_info_200_application_xml_string = r.content
            if utils.match_content_type(content_type, "text/json"):
                res.session_controller_get_session_info_200_text_json_string = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.session_controller_get_session_info_200_text_xml_string = r.content

        return res

    
    def session_controller_login(self, request: operations.SessionControllerLoginRequest) -> operations.SessionControllerLoginResponse:
        r"""Login as a customer given their username and password.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/session", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SessionControllerLoginResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.session_controller_login_200_application_json_string = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.session_controller_login_200_application_xml_string = r.content
            if utils.match_content_type(content_type, "text/json"):
                res.session_controller_login_200_text_json_string = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.session_controller_login_200_text_xml_string = r.content

        return res

    
    def session_controller_logout(self, request: operations.SessionControllerLogoutRequest) -> operations.SessionControllerLogoutResponse:
        r"""Logout a customer previously logged in via the Login endpoint.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/session", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SessionControllerLogoutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def session_controller_reset_password(self, request: operations.SessionControllerResetPasswordRequest) -> operations.SessionControllerResetPasswordResponse:
        r"""Reset the customer's password. An email will be sent out to reset.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customer/{shortName}/session/resetpassword", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SessionControllerResetPasswordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    