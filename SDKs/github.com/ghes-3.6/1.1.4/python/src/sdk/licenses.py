"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from sdk.models import operations, shared
from typing import Optional

class Licenses:
    r"""View various OSS licenses."""
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
        
    def licenses_get(self, request: operations.LicensesGetRequest) -> operations.LicensesGetResponse:
        r"""Get a license
        https://docs.github.com/enterprise-server@3.6/rest/reference/licenses#get-a-license - API method documentation
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.LicensesGetRequest, base_url, '/licenses/{license}', request)
        
        
        client = self._client
        
        http_res = client.request('GET', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.LicensesGetResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.License])
                res.license = out
        elif http_res.status_code == 304:
            pass
        elif http_res.status_code in [403, 404]:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    def licenses_get_all_commonly_used(self, request: operations.LicensesGetAllCommonlyUsedRequest) -> operations.LicensesGetAllCommonlyUsedResponse:
        r"""Get all commonly used licenses
        https://docs.github.com/enterprise-server@3.6/rest/reference/licenses#get-all-commonly-used-licenses - API method documentation
        """
        base_url = self._server_url
        
        url = base_url.removesuffix('/') + '/licenses'
        
        query_params = utils.get_query_params(operations.LicensesGetAllCommonlyUsedRequest, request)
        
        client = self._client
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.LicensesGetAllCommonlyUsedResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[list[shared.LicenseSimple]])
                res.license_simples = out
        elif http_res.status_code == 304:
            pass

        return res

    def licenses_get_for_repo(self, request: operations.LicensesGetForRepoRequest) -> operations.LicensesGetForRepoResponse:
        r"""Get the license for a repository
        This method returns the contents of the repository's license file, if one is detected.
        
        Similar to [Get repository content](https://docs.github.com/enterprise-server@3.6/rest/reference/repos#get-repository-content), this method also supports [custom media types](https://docs.github.com/enterprise-server@3.6/rest/overview/media-types) for retrieving the raw license content or rendered license HTML.
        https://docs.github.com/enterprise-server@3.6/rest/reference/licenses/#get-the-license-for-a-repository - API method documentation
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.LicensesGetForRepoRequest, base_url, '/repos/{owner}/{repo}/license', request)
        
        
        client = self._client
        
        http_res = client.request('GET', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.LicensesGetForRepoResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.LicenseContent])
                res.license_content = out

        return res

    