import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class APIKeys:
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

    
    def delete_keys_id_(self, request: operations.DeleteKeysIDRequest) -> operations.DeleteKeysIDResponse:
        r"""Delete account API key
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/keys/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteKeysIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteKeysID401ApplicationJSON])
                res.delete_keys_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteKeysID403ApplicationJSON])
                res.delete_keys_id_403_application_json_object = out

        return res

    
    def delete_targets_target_id_keys_id_(self, request: operations.DeleteTargetsTargetIDKeysIDRequest) -> operations.DeleteTargetsTargetIDKeysIDResponse:
        r"""Delete target API key
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/keys/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTargetsTargetIDKeysIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteTargetsTargetIDKeysID403ApplicationJSON])
                res.delete_targets_target_id_keys_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteTargetsTargetIDKeysID404ApplicationJSON])
                res.delete_targets_target_id_keys_id_404_application_json_object = out

        return res

    
    def get_keys_(self, request: operations.GetKeysRequest) -> operations.GetKeysResponse:
        r"""List API keys allowed to operate on account
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/keys/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetKeysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetKeys200ApplicationJSON])
                res.get_keys_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetKeys401ApplicationJSON])
                res.get_keys_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetKeys403ApplicationJSON])
                res.get_keys_403_application_json_object = out

        return res

    
    def get_keys_id_(self, request: operations.GetKeysIDRequest) -> operations.GetKeysIDResponse:
        r"""Retrieve account API key
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/keys/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetKeysIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIKey])
                res.api_key = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetKeysID401ApplicationJSON])
                res.get_keys_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetKeysID403ApplicationJSON])
                res.get_keys_id_403_application_json_object = out

        return res

    
    def get_targets_target_id_keys_(self, request: operations.GetTargetsTargetIDKeysRequest) -> operations.GetTargetsTargetIDKeysResponse:
        r"""List target specific API keys
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/keys/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsTargetIDKeysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDKeys200ApplicationJSON])
                res.get_targets_target_id_keys_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDKeys401ApplicationJSON])
                res.get_targets_target_id_keys_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDKeys404ApplicationJSON])
                res.get_targets_target_id_keys_404_application_json_object = out

        return res

    
    def get_targets_target_id_keys_id_(self, request: operations.GetTargetsTargetIDKeysIDRequest) -> operations.GetTargetsTargetIDKeysIDResponse:
        r"""Retrieve target API key
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/keys/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsTargetIDKeysIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIKey])
                res.api_key = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDKeysID403ApplicationJSON])
                res.get_targets_target_id_keys_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDKeysID404ApplicationJSON])
                res.get_targets_target_id_keys_id_404_application_json_object = out

        return res

    
    def post_keys_(self, request: operations.PostKeysRequest) -> operations.PostKeysResponse:
        r"""Create account API key
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/keys/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostKeysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIKey])
                res.api_key = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostKeys401ApplicationJSON])
                res.post_keys_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostKeys403ApplicationJSON])
                res.post_keys_403_application_json_object = out

        return res

    
    def post_targets_target_id_keys_(self, request: operations.PostTargetsTargetIDKeysRequest) -> operations.PostTargetsTargetIDKeysResponse:
        r"""Create target API key
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/keys/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTargetsTargetIDKeysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIKey])
                res.api_key = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTargetsTargetIDKeys400ApplicationJSON])
                res.post_targets_target_id_keys_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTargetsTargetIDKeys401ApplicationJSON])
                res.post_targets_target_id_keys_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTargetsTargetIDKeys403ApplicationJSON])
                res.post_targets_target_id_keys_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTargetsTargetIDKeys404ApplicationJSON])
                res.post_targets_target_id_keys_404_application_json_object = out

        return res

    