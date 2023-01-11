import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Assets:
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

    
    def delete_targets_target_id_assets_id_(self, request: operations.DeleteTargetsTargetIDAssetsIDRequest) -> operations.DeleteTargetsTargetIDAssetsIDResponse:
        r"""Delete asset
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/assets/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTargetsTargetIDAssetsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteTargetsTargetIDAssetsID401ApplicationJSON])
                res.delete_targets_target_id_assets_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteTargetsTargetIDAssetsID403ApplicationJSON])
                res.delete_targets_target_id_assets_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteTargetsTargetIDAssetsID404ApplicationJSON])
                res.delete_targets_target_id_assets_id_404_application_json_object = out

        return res

    
    def get_targets_target_id_assets_(self, request: operations.GetTargetsTargetIDAssetsRequest) -> operations.GetTargetsTargetIDAssetsResponse:
        r"""List target's assets
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/assets/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsTargetIDAssetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDAssets200ApplicationJSON])
                res.get_targets_target_id_assets_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDAssets401ApplicationJSON])
                res.get_targets_target_id_assets_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDAssets404ApplicationJSON])
                res.get_targets_target_id_assets_404_application_json_object = out

        return res

    
    def get_targets_target_id_assets_id_(self, request: operations.GetTargetsTargetIDAssetsIDRequest) -> operations.GetTargetsTargetIDAssetsIDResponse:
        r"""Retrieve asset
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/assets/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsTargetIDAssetsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Asset])
                res.asset = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDAssetsID400ApplicationJSON])
                res.get_targets_target_id_assets_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDAssetsID401ApplicationJSON])
                res.get_targets_target_id_assets_id_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDAssetsID404ApplicationJSON])
                res.get_targets_target_id_assets_id_404_application_json_object = out

        return res

    
    def patch_targets_target_id_assets_id_(self, request: operations.PatchTargetsTargetIDAssetsIDRequest) -> operations.PatchTargetsTargetIDAssetsIDResponse:
        r"""Partial update assets
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/assets/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchTargetsTargetIDAssetsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Asset])
                res.asset = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchTargetsTargetIDAssetsID400ApplicationJSON])
                res.patch_targets_target_id_assets_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchTargetsTargetIDAssetsID401ApplicationJSON])
                res.patch_targets_target_id_assets_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchTargetsTargetIDAssetsID403ApplicationJSON])
                res.patch_targets_target_id_assets_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchTargetsTargetIDAssetsID404ApplicationJSON])
                res.patch_targets_target_id_assets_id_404_application_json_object = out

        return res

    
    def post_targets_target_id_assets_(self, request: operations.PostTargetsTargetIDAssetsRequest) -> operations.PostTargetsTargetIDAssetsResponse:
        r"""Create new asset
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/assets/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTargetsTargetIDAssetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Asset])
                res.asset = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTargetsTargetIDAssets400ApplicationJSON])
                res.post_targets_target_id_assets_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTargetsTargetIDAssets401ApplicationJSON])
                res.post_targets_target_id_assets_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTargetsTargetIDAssets403ApplicationJSON])
                res.post_targets_target_id_assets_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTargetsTargetIDAssets404ApplicationJSON])
                res.post_targets_target_id_assets_404_application_json_object = out

        return res

    
    def post_targets_target_id_assets_id_verify_(self, request: operations.PostTargetsTargetIDAssetsIDVerifyRequest) -> operations.PostTargetsTargetIDAssetsIDVerifyResponse:
        r"""Verify asset ownership
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/assets/{id}/verify/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTargetsTargetIDAssetsIDVerifyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTargetsTargetIDAssetsIDVerify200ApplicationJSON])
                res.post_targets_target_id_assets_id_verify_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTargetsTargetIDAssetsIDVerify400ApplicationJSON])
                res.post_targets_target_id_assets_id_verify_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTargetsTargetIDAssetsIDVerify401ApplicationJSON])
                res.post_targets_target_id_assets_id_verify_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTargetsTargetIDAssetsIDVerify403ApplicationJSON])
                res.post_targets_target_id_assets_id_verify_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTargetsTargetIDAssetsIDVerify404ApplicationJSON])
                res.post_targets_target_id_assets_id_verify_404_application_json_object = out

        return res

    
    def put_targets_target_id_assets_id_(self, request: operations.PutTargetsTargetIDAssetsIDRequest) -> operations.PutTargetsTargetIDAssetsIDResponse:
        r"""Update asset
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/assets/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutTargetsTargetIDAssetsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Asset])
                res.asset = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutTargetsTargetIDAssetsID400ApplicationJSON])
                res.put_targets_target_id_assets_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutTargetsTargetIDAssetsID401ApplicationJSON])
                res.put_targets_target_id_assets_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutTargetsTargetIDAssetsID403ApplicationJSON])
                res.put_targets_target_id_assets_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutTargetsTargetIDAssetsID404ApplicationJSON])
                res.put_targets_target_id_assets_id_404_application_json_object = out

        return res

    