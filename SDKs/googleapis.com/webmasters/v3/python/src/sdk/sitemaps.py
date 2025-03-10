"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from sdk.models import operations, shared
from typing import Optional

class Sitemaps:
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
        
    def webmasters_sitemaps_delete(self, request: operations.WebmastersSitemapsDeleteRequest, security: operations.WebmastersSitemapsDeleteSecurity) -> operations.WebmastersSitemapsDeleteResponse:
        r"""Deletes a sitemap from this site."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.WebmastersSitemapsDeleteRequest, base_url, '/sites/{siteUrl}/sitemaps/{feedpath}', request)
        
        query_params = utils.get_query_params(operations.WebmastersSitemapsDeleteRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('DELETE', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.WebmastersSitemapsDeleteResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        

        return res

    def webmasters_sitemaps_get(self, request: operations.WebmastersSitemapsGetRequest, security: operations.WebmastersSitemapsGetSecurity) -> operations.WebmastersSitemapsGetResponse:
        r"""Retrieves information about a specific sitemap."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.WebmastersSitemapsGetRequest, base_url, '/sites/{siteUrl}/sitemaps/{feedpath}', request)
        
        query_params = utils.get_query_params(operations.WebmastersSitemapsGetRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.WebmastersSitemapsGetResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.WmxSitemap])
                res.wmx_sitemap = out

        return res

    def webmasters_sitemaps_list(self, request: operations.WebmastersSitemapsListRequest, security: operations.WebmastersSitemapsListSecurity) -> operations.WebmastersSitemapsListResponse:
        r"""Lists the sitemaps-entries submitted for this site, or included in the sitemap index file (if sitemapIndex is specified in the request)."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.WebmastersSitemapsListRequest, base_url, '/sites/{siteUrl}/sitemaps', request)
        
        query_params = utils.get_query_params(operations.WebmastersSitemapsListRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.WebmastersSitemapsListResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.SitemapsListResponse])
                res.sitemaps_list_response = out

        return res

    def webmasters_sitemaps_submit(self, request: operations.WebmastersSitemapsSubmitRequest, security: operations.WebmastersSitemapsSubmitSecurity) -> operations.WebmastersSitemapsSubmitResponse:
        r"""Submits a sitemap for a site."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.WebmastersSitemapsSubmitRequest, base_url, '/sites/{siteUrl}/sitemaps/{feedpath}', request)
        
        query_params = utils.get_query_params(operations.WebmastersSitemapsSubmitRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('PUT', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.WebmastersSitemapsSubmitResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        

        return res

    