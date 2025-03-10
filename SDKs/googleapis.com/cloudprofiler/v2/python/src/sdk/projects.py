"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from sdk.models import operations, shared
from typing import Optional

class Projects:
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
        
    def cloudprofiler_projects_profiles_create(self, request: operations.CloudprofilerProjectsProfilesCreateRequest, security: operations.CloudprofilerProjectsProfilesCreateSecurity) -> operations.CloudprofilerProjectsProfilesCreateResponse:
        r"""CreateProfile creates a new profile resource in the online mode. The server ensures that the new profiles are created at a constant rate per deployment, so the creation request may hang for some time until the next profile session is available. The request may fail with ABORTED error if the creation is not available within ~1m, the response will indicate the duration of the backoff the client should take before attempting creating a profile again. The backoff duration is returned in google.rpc.RetryInfo extension on the response status. To a gRPC client, the extension will be return as a binary-serialized proto in the trailing metadata item named \\"google.rpc.retryinfo-bin\\"."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.CloudprofilerProjectsProfilesCreateRequest, base_url, '/v2/{parent}/profiles', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "create_profile_request", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        query_params = utils.get_query_params(operations.CloudprofilerProjectsProfilesCreateRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('POST', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.CloudprofilerProjectsProfilesCreateResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.Profile])
                res.profile = out

        return res

    def cloudprofiler_projects_profiles_create_offline(self, request: operations.CloudprofilerProjectsProfilesCreateOfflineRequest, security: operations.CloudprofilerProjectsProfilesCreateOfflineSecurity) -> operations.CloudprofilerProjectsProfilesCreateOfflineResponse:
        r"""CreateOfflineProfile creates a new profile resource in the offline mode. The client provides the profile to create along with the profile bytes, the server records it."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.CloudprofilerProjectsProfilesCreateOfflineRequest, base_url, '/v2/{parent}/profiles:createOffline', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "profile_input", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        query_params = utils.get_query_params(operations.CloudprofilerProjectsProfilesCreateOfflineRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('POST', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.CloudprofilerProjectsProfilesCreateOfflineResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.Profile])
                res.profile = out

        return res

    def cloudprofiler_projects_profiles_patch(self, request: operations.CloudprofilerProjectsProfilesPatchRequest, security: operations.CloudprofilerProjectsProfilesPatchSecurity) -> operations.CloudprofilerProjectsProfilesPatchResponse:
        r"""UpdateProfile updates the profile bytes and labels on the profile resource created in the online mode. Updating the bytes for profiles created in the offline mode is currently not supported: the profile content must be provided at the time of the profile creation."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.CloudprofilerProjectsProfilesPatchRequest, base_url, '/v2/{name}', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "profile_input", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        query_params = utils.get_query_params(operations.CloudprofilerProjectsProfilesPatchRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('PATCH', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.CloudprofilerProjectsProfilesPatchResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.Profile])
                res.profile = out

        return res

    