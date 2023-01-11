import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Secrets:
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

    
    def secrets_choices_list(self) -> operations.SecretsChoicesListResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/secrets/_choices/"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsChoicesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def secrets_choices_read(self, request: operations.SecretsChoicesReadRequest) -> operations.SecretsChoicesReadResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/secrets/_choices/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsChoicesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def secrets_generate_rsa_key_pair_list(self) -> operations.SecretsGenerateRsaKeyPairListResponse:
        r"""This endpoint can be used to generate a new RSA key pair. The keys are returned in PEM format.
        
            {
                \"public_key\": \"<public key>\",
                \"private_key\": \"<private key>\"
            }
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/secrets/generate-rsa-key-pair/"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsGenerateRsaKeyPairListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def secrets_get_session_key_create(self) -> operations.SecretsGetSessionKeyCreateResponse:
        r"""Retrieve a temporary session key to use for encrypting and decrypting secrets via the API. The user's private RSA
        key is POSTed with the name `private_key`. An example:
        
            curl -v -X POST -H \"Authorization: Token <token>\" -H \"Accept: application/json; indent=4\" \
            --data-urlencode \"private_key@<filename>\" https://netbox/api/secrets/get-session-key/
        
        This request will yield a base64-encoded session key to be included in an `X-Session-Key` header in future requests:
        
            {
                \"session_key\": \"+8t4SI6XikgVmB5+/urhozx9O5qCQANyOk1MNe6taRf=\"
            }
        
        This endpoint accepts one optional parameter: `preserve_key`. If True and a session key exists, the existing session
        key will be returned instead of a new one.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/secrets/get-session-key/"
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsGetSessionKeyCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass

        return res

    
    def secrets_secret_roles_create(self, request: operations.SecretsSecretRolesCreateRequest) -> operations.SecretsSecretRolesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/secrets/secret-roles/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsSecretRolesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SecretRole])
                res.secret_role = out

        return res

    
    def secrets_secret_roles_delete(self, request: operations.SecretsSecretRolesDeleteRequest) -> operations.SecretsSecretRolesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/secrets/secret-roles/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsSecretRolesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def secrets_secret_roles_list(self, request: operations.SecretsSecretRolesListRequest) -> operations.SecretsSecretRolesListResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/secrets/secret-roles/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsSecretRolesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SecretsSecretRolesList200ApplicationJSON])
                res.secrets_secret_roles_list_200_application_json_object = out

        return res

    
    def secrets_secret_roles_partial_update(self, request: operations.SecretsSecretRolesPartialUpdateRequest) -> operations.SecretsSecretRolesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/secrets/secret-roles/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsSecretRolesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SecretRole])
                res.secret_role = out

        return res

    
    def secrets_secret_roles_read(self, request: operations.SecretsSecretRolesReadRequest) -> operations.SecretsSecretRolesReadResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/secrets/secret-roles/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsSecretRolesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SecretRole])
                res.secret_role = out

        return res

    
    def secrets_secret_roles_update(self, request: operations.SecretsSecretRolesUpdateRequest) -> operations.SecretsSecretRolesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/secrets/secret-roles/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsSecretRolesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SecretRole])
                res.secret_role = out

        return res

    
    def secrets_secrets_create(self, request: operations.SecretsSecretsCreateRequest) -> operations.SecretsSecretsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/secrets/secrets/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsSecretsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Secret])
                res.secret = out

        return res

    
    def secrets_secrets_delete(self, request: operations.SecretsSecretsDeleteRequest) -> operations.SecretsSecretsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/secrets/secrets/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsSecretsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def secrets_secrets_list(self, request: operations.SecretsSecretsListRequest) -> operations.SecretsSecretsListResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/secrets/secrets/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsSecretsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SecretsSecretsList200ApplicationJSON])
                res.secrets_secrets_list_200_application_json_object = out

        return res

    
    def secrets_secrets_partial_update(self, request: operations.SecretsSecretsPartialUpdateRequest) -> operations.SecretsSecretsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/secrets/secrets/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsSecretsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Secret])
                res.secret = out

        return res

    
    def secrets_secrets_read(self, request: operations.SecretsSecretsReadRequest) -> operations.SecretsSecretsReadResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/secrets/secrets/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsSecretsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Secret])
                res.secret = out

        return res

    
    def secrets_secrets_update(self, request: operations.SecretsSecretsUpdateRequest) -> operations.SecretsSecretsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/secrets/secrets/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsSecretsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Secret])
                res.secret = out

        return res

    