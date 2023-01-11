import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Login:
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

    
    def post_auth_obtain_(self, request: operations.PostAuthObtainRequest) -> operations.PostAuthObtainResponse:
        r"""Authenticate user
        The received token should be used for authenticated requests by including in the Authorization header as `Authorization: JWT <token>`.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/auth/obtain/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAuthObtainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAuthObtain200ApplicationJSON])
                res.post_auth_obtain_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAuthObtain400ApplicationJSON])
                res.post_auth_obtain_400_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAuthObtain500ApplicationJSON])
                res.post_auth_obtain_500_application_json_object = out

        return res

    
    def post_auth_refresh_(self, request: operations.PostAuthRefreshRequest) -> operations.PostAuthRefreshResponse:
        r"""Replace token with a new one
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/auth/refresh/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAuthRefreshResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAuthRefresh200ApplicationJSON])
                res.post_auth_refresh_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAuthRefresh400ApplicationJSON])
                res.post_auth_refresh_400_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAuthRefresh500ApplicationJSON])
                res.post_auth_refresh_500_application_json_object = out

        return res

    
    def post_auth_revoke_(self, request: operations.PostAuthRevokeRequest) -> operations.PostAuthRevokeResponse:
        r"""Revoke a token
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/auth/revoke/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAuthRevokeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAuthRevoke200ApplicationJSON])
                res.post_auth_revoke_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAuthRevoke400ApplicationJSON])
                res.post_auth_revoke_400_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAuthRevoke500ApplicationJSON])
                res.post_auth_revoke_500_application_json_object = out

        return res

    
    def post_auth_verify_(self, request: operations.PostAuthVerifyRequest) -> operations.PostAuthVerifyResponse:
        r"""Verify a token
        Check for the validity of a user token.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/auth/verify/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAuthVerifyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAuthVerify200ApplicationJSON])
                res.post_auth_verify_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAuthVerify400ApplicationJSON])
                res.post_auth_verify_400_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAuthVerify500ApplicationJSON])
                res.post_auth_verify_500_application_json_object = out

        return res

    
    def post_enterprise_auth_obtain_(self, request: operations.PostEnterpriseAuthObtainRequest) -> operations.PostEnterpriseAuthObtainResponse:
        r"""Enterprise user authentication
        The received token should be used for authenticated requests by including in the Authorization header as `Authorization: JWT <token>`.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/enterprise/auth/obtain/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostEnterpriseAuthObtainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostEnterpriseAuthObtain200ApplicationJSON])
                res.post_enterprise_auth_obtain_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostEnterpriseAuthObtain400ApplicationJSON])
                res.post_enterprise_auth_obtain_400_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostEnterpriseAuthObtain500ApplicationJSON])
                res.post_enterprise_auth_obtain_500_application_json_object = out

        return res

    
    def post_enterprise_auth_refresh_(self, request: operations.PostEnterpriseAuthRefreshRequest) -> operations.PostEnterpriseAuthRefreshResponse:
        r"""Enterprise token refresh
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/enterprise/auth/refresh/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostEnterpriseAuthRefreshResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostEnterpriseAuthRefresh200ApplicationJSON])
                res.post_enterprise_auth_refresh_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostEnterpriseAuthRefresh400ApplicationJSON])
                res.post_enterprise_auth_refresh_400_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostEnterpriseAuthRefresh500ApplicationJSON])
                res.post_enterprise_auth_refresh_500_application_json_object = out

        return res

    
    def post_enterprise_auth_revoke_(self, request: operations.PostEnterpriseAuthRevokeRequest) -> operations.PostEnterpriseAuthRevokeResponse:
        r"""Enterprise token revokation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/enterprise/auth/revoke/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostEnterpriseAuthRevokeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostEnterpriseAuthRevoke200ApplicationJSON])
                res.post_enterprise_auth_revoke_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostEnterpriseAuthRevoke400ApplicationJSON])
                res.post_enterprise_auth_revoke_400_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostEnterpriseAuthRevoke500ApplicationJSON])
                res.post_enterprise_auth_revoke_500_application_json_object = out

        return res

    
    def post_enterprise_auth_verify_(self, request: operations.PostEnterpriseAuthVerifyRequest) -> operations.PostEnterpriseAuthVerifyResponse:
        r"""Enterprise token verification
        Check for the validity of a user token.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/enterprise/auth/verify/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostEnterpriseAuthVerifyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostEnterpriseAuthVerify200ApplicationJSON])
                res.post_enterprise_auth_verify_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostEnterpriseAuthVerify400ApplicationJSON])
                res.post_enterprise_auth_verify_400_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostEnterpriseAuthVerify500ApplicationJSON])
                res.post_enterprise_auth_verify_500_application_json_object = out

        return res

    