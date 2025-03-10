"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from sdk.models import operations, shared
from typing import Optional

class Assets:
    r"""Other resources a scan required access to (e.g. the domain where an
    API is being served) should be added here.
    You can also configure custom headers and cookies for each asset.
    """
    _client: requests_http.Session
    _security_client: requests_http.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests_http.Session, security_client: requests_http.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version
        
    def delete_targets_target_id_assets_id_(self, request: operations.DeleteTargetsTargetIDAssetsIDRequest) -> operations.DeleteTargetsTargetIDAssetsIDResponse:
        r"""Delete asset"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DeleteTargetsTargetIDAssetsIDRequest, base_url, '/targets/{target_id}/assets/{id}/', request)
        
        
        client = self._security_client
        
        http_res = client.request('DELETE', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DeleteTargetsTargetIDAssetsIDResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 204:
            pass
        elif http_res.status_code == 401:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.DeleteTargetsTargetIDAssetsID401ApplicationJSON])
                res.delete_targets_target_id_assets_id_401_application_json_object = out
        elif http_res.status_code == 403:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.DeleteTargetsTargetIDAssetsID403ApplicationJSON])
                res.delete_targets_target_id_assets_id_403_application_json_object = out
        elif http_res.status_code == 404:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.DeleteTargetsTargetIDAssetsID404ApplicationJSON])
                res.delete_targets_target_id_assets_id_404_application_json_object = out

        return res

    def get_targets_target_id_assets_(self, request: operations.GetTargetsTargetIDAssetsRequest) -> operations.GetTargetsTargetIDAssetsResponse:
        r"""List target's assets"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.GetTargetsTargetIDAssetsRequest, base_url, '/targets/{target_id}/assets/', request)
        
        query_params = utils.get_query_params(operations.GetTargetsTargetIDAssetsRequest, request)
        
        client = self._security_client
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetTargetsTargetIDAssetsResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.GetTargetsTargetIDAssets200ApplicationJSON])
                res.get_targets_target_id_assets_200_application_json_object = out
        elif http_res.status_code == 401:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.GetTargetsTargetIDAssets401ApplicationJSON])
                res.get_targets_target_id_assets_401_application_json_object = out
        elif http_res.status_code == 404:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.GetTargetsTargetIDAssets404ApplicationJSON])
                res.get_targets_target_id_assets_404_application_json_object = out

        return res

    def get_targets_target_id_assets_id_(self, request: operations.GetTargetsTargetIDAssetsIDRequest) -> operations.GetTargetsTargetIDAssetsIDResponse:
        r"""Retrieve asset"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.GetTargetsTargetIDAssetsIDRequest, base_url, '/targets/{target_id}/assets/{id}/', request)
        
        
        client = self._security_client
        
        http_res = client.request('GET', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetTargetsTargetIDAssetsIDResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.Asset])
                res.asset = out
        elif http_res.status_code == 400:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.GetTargetsTargetIDAssetsID400ApplicationJSON])
                res.get_targets_target_id_assets_id_400_application_json_object = out
        elif http_res.status_code == 401:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.GetTargetsTargetIDAssetsID401ApplicationJSON])
                res.get_targets_target_id_assets_id_401_application_json_object = out
        elif http_res.status_code == 404:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.GetTargetsTargetIDAssetsID404ApplicationJSON])
                res.get_targets_target_id_assets_id_404_application_json_object = out

        return res

    def patch_targets_target_id_assets_id_(self, request: operations.PatchTargetsTargetIDAssetsIDRequest) -> operations.PatchTargetsTargetIDAssetsIDResponse:
        r"""Partial update assets"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.PatchTargetsTargetIDAssetsIDRequest, base_url, '/targets/{target_id}/assets/{id}/', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "asset_input", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        if data is None and form is None:
            raise Exception('request body is required')
        
        client = self._security_client
        
        http_res = client.request('PATCH', url, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.PatchTargetsTargetIDAssetsIDResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.Asset])
                res.asset = out
        elif http_res.status_code == 400:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.PatchTargetsTargetIDAssetsID400ApplicationJSON])
                res.patch_targets_target_id_assets_id_400_application_json_object = out
        elif http_res.status_code == 401:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.PatchTargetsTargetIDAssetsID401ApplicationJSON])
                res.patch_targets_target_id_assets_id_401_application_json_object = out
        elif http_res.status_code == 403:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.PatchTargetsTargetIDAssetsID403ApplicationJSON])
                res.patch_targets_target_id_assets_id_403_application_json_object = out
        elif http_res.status_code == 404:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.PatchTargetsTargetIDAssetsID404ApplicationJSON])
                res.patch_targets_target_id_assets_id_404_application_json_object = out

        return res

    def post_targets_target_id_assets_(self, request: operations.PostTargetsTargetIDAssetsRequest) -> operations.PostTargetsTargetIDAssetsResponse:
        r"""Create new asset"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.PostTargetsTargetIDAssetsRequest, base_url, '/targets/{target_id}/assets/', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "asset_input", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        if data is None and form is None:
            raise Exception('request body is required')
        
        client = self._security_client
        
        http_res = client.request('POST', url, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.PostTargetsTargetIDAssetsResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 201:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.Asset])
                res.asset = out
        elif http_res.status_code == 400:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.PostTargetsTargetIDAssets400ApplicationJSON])
                res.post_targets_target_id_assets_400_application_json_object = out
        elif http_res.status_code == 401:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.PostTargetsTargetIDAssets401ApplicationJSON])
                res.post_targets_target_id_assets_401_application_json_object = out
        elif http_res.status_code == 403:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.PostTargetsTargetIDAssets403ApplicationJSON])
                res.post_targets_target_id_assets_403_application_json_object = out
        elif http_res.status_code == 404:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.PostTargetsTargetIDAssets404ApplicationJSON])
                res.post_targets_target_id_assets_404_application_json_object = out

        return res

    def post_targets_target_id_assets_id_verify_(self, request: operations.PostTargetsTargetIDAssetsIDVerifyRequest) -> operations.PostTargetsTargetIDAssetsIDVerifyResponse:
        r"""Verify asset ownership"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.PostTargetsTargetIDAssetsIDVerifyRequest, base_url, '/targets/{target_id}/assets/{id}/verify/', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "request_body", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        if data is None and form is None:
            raise Exception('request body is required')
        
        client = self._security_client
        
        http_res = client.request('POST', url, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.PostTargetsTargetIDAssetsIDVerifyResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.PostTargetsTargetIDAssetsIDVerify200ApplicationJSON])
                res.post_targets_target_id_assets_id_verify_200_application_json_object = out
        elif http_res.status_code == 400:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.PostTargetsTargetIDAssetsIDVerify400ApplicationJSON])
                res.post_targets_target_id_assets_id_verify_400_application_json_object = out
        elif http_res.status_code == 401:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.PostTargetsTargetIDAssetsIDVerify401ApplicationJSON])
                res.post_targets_target_id_assets_id_verify_401_application_json_object = out
        elif http_res.status_code == 403:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.PostTargetsTargetIDAssetsIDVerify403ApplicationJSON])
                res.post_targets_target_id_assets_id_verify_403_application_json_object = out
        elif http_res.status_code == 404:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.PostTargetsTargetIDAssetsIDVerify404ApplicationJSON])
                res.post_targets_target_id_assets_id_verify_404_application_json_object = out

        return res

    def put_targets_target_id_assets_id_(self, request: operations.PutTargetsTargetIDAssetsIDRequest) -> operations.PutTargetsTargetIDAssetsIDResponse:
        r"""Update asset"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.PutTargetsTargetIDAssetsIDRequest, base_url, '/targets/{target_id}/assets/{id}/', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "asset_input", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        if data is None and form is None:
            raise Exception('request body is required')
        
        client = self._security_client
        
        http_res = client.request('PUT', url, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.PutTargetsTargetIDAssetsIDResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.Asset])
                res.asset = out
        elif http_res.status_code == 400:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.PutTargetsTargetIDAssetsID400ApplicationJSON])
                res.put_targets_target_id_assets_id_400_application_json_object = out
        elif http_res.status_code == 401:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.PutTargetsTargetIDAssetsID401ApplicationJSON])
                res.put_targets_target_id_assets_id_401_application_json_object = out
        elif http_res.status_code == 403:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.PutTargetsTargetIDAssetsID403ApplicationJSON])
                res.put_targets_target_id_assets_id_403_application_json_object = out
        elif http_res.status_code == 404:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.PutTargetsTargetIDAssetsID404ApplicationJSON])
                res.put_targets_target_id_assets_id_404_application_json_object = out

        return res

    