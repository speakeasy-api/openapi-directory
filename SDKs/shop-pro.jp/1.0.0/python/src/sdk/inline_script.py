"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from sdk.models import operations
from typing import Optional

class InlineScript:
    r"""インラインスクリプトを挿入するAPIです。※新規デベロッパーはこのエンドポイントを利用できません"""
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
        
    def create_inline_script_tag(self, request: operations.CreateInlineScriptTagRequestBody, security: operations.CreateInlineScriptTagSecurity) -> operations.CreateInlineScriptTagResponse:
        r"""インラインスクリプトタグの登録"""
        base_url = self._server_url
        
        url = base_url.removesuffix('/') + '/v1/inline_script_tags.json'
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "request", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('POST', url, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.CreateInlineScriptTagResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 201:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.CreateInlineScriptTag201ApplicationJSON])
                res.create_inline_script_tag_201_application_json_object = out

        return res

    def delete_inline_script_tag(self, request: operations.DeleteInlineScriptTagRequest, security: operations.DeleteInlineScriptTagSecurity) -> operations.DeleteInlineScriptTagResponse:
        r"""インラインスクリプトタグの削除"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DeleteInlineScriptTagRequest, base_url, '/v1/inline_script_tags/{inlineScriptTagId}.json', request)
        
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('DELETE', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DeleteInlineScriptTagResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        

        return res

    def get_inline_script_tag(self, request: operations.GetInlineScriptTagRequest, security: operations.GetInlineScriptTagSecurity) -> operations.GetInlineScriptTagResponse:
        r"""インラインスクリプトタグの取得"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.GetInlineScriptTagRequest, base_url, '/v1/inline_script_tags/{inlineScriptTagId}.json', request)
        
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('GET', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetInlineScriptTagResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.GetInlineScriptTag200ApplicationJSON])
                res.get_inline_script_tag_200_application_json_object = out

        return res

    def get_inline_script_tags(self) -> operations.GetInlineScriptTagsResponse:
        r"""インラインスクリプトタグの取得"""
        base_url = self._server_url
        
        url = base_url.removesuffix('/') + '/v1/inline_script_tags.json'
        
        
        client = self._client
        
        http_res = client.request('GET', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetInlineScriptTagsResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.GetInlineScriptTags200ApplicationJSON])
                res.get_inline_script_tags_200_application_json_object = out

        return res

    def update_inline_script_tag(self, request: operations.UpdateInlineScriptTagRequest, security: operations.UpdateInlineScriptTagSecurity) -> operations.UpdateInlineScriptTagResponse:
        r"""インラインスクリプトタグの更新"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.UpdateInlineScriptTagRequest, base_url, '/v1/inline_script_tags/{inlineScriptTagId}.json', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "request_body", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('PUT', url, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.UpdateInlineScriptTagResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.UpdateInlineScriptTag200ApplicationJSON])
                res.update_inline_script_tag_200_application_json_object = out

        return res

    