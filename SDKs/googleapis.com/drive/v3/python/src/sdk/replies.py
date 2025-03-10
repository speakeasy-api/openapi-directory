"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from sdk.models import operations, shared
from typing import Optional

class Replies:
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
        
    def drive_replies_create(self, request: operations.DriveRepliesCreateRequest, security: operations.DriveRepliesCreateSecurity) -> operations.DriveRepliesCreateResponse:
        r"""Creates a reply to a comment."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DriveRepliesCreateRequest, base_url, '/files/{fileId}/comments/{commentId}/replies', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "reply", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        query_params = utils.get_query_params(operations.DriveRepliesCreateRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('POST', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DriveRepliesCreateResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.Reply])
                res.reply = out

        return res

    def drive_replies_delete(self, request: operations.DriveRepliesDeleteRequest, security: operations.DriveRepliesDeleteSecurity) -> operations.DriveRepliesDeleteResponse:
        r"""Deletes a reply."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DriveRepliesDeleteRequest, base_url, '/files/{fileId}/comments/{commentId}/replies/{replyId}', request)
        
        query_params = utils.get_query_params(operations.DriveRepliesDeleteRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('DELETE', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DriveRepliesDeleteResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        

        return res

    def drive_replies_get(self, request: operations.DriveRepliesGetRequest, security: operations.DriveRepliesGetSecurity) -> operations.DriveRepliesGetResponse:
        r"""Gets a reply by ID."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DriveRepliesGetRequest, base_url, '/files/{fileId}/comments/{commentId}/replies/{replyId}', request)
        
        query_params = utils.get_query_params(operations.DriveRepliesGetRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DriveRepliesGetResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.Reply])
                res.reply = out

        return res

    def drive_replies_list(self, request: operations.DriveRepliesListRequest, security: operations.DriveRepliesListSecurity) -> operations.DriveRepliesListResponse:
        r"""Lists a comment's replies."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DriveRepliesListRequest, base_url, '/files/{fileId}/comments/{commentId}/replies', request)
        
        query_params = utils.get_query_params(operations.DriveRepliesListRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DriveRepliesListResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.ReplyList])
                res.reply_list = out

        return res

    def drive_replies_update(self, request: operations.DriveRepliesUpdateRequest, security: operations.DriveRepliesUpdateSecurity) -> operations.DriveRepliesUpdateResponse:
        r"""Updates a reply with patch semantics."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DriveRepliesUpdateRequest, base_url, '/files/{fileId}/comments/{commentId}/replies/{replyId}', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "reply", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        query_params = utils.get_query_params(operations.DriveRepliesUpdateRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('PATCH', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DriveRepliesUpdateResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.Reply])
                res.reply = out

        return res

    