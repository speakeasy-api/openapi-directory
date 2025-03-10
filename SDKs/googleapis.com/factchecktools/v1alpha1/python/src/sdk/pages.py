"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from sdk.models import operations, shared
from typing import Any, Optional

class Pages:
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
        
    def factchecktools_pages_create(self, request: operations.FactchecktoolsPagesCreateRequest, security: operations.FactchecktoolsPagesCreateSecurity) -> operations.FactchecktoolsPagesCreateResponse:
        r"""Create `ClaimReview` markup on a page."""
        base_url = self._server_url
        
        url = base_url.removesuffix('/') + '/v1alpha1/pages'
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "google_factchecking_factchecktools_v1alpha1_claim_review_markup_page", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        query_params = utils.get_query_params(operations.FactchecktoolsPagesCreateRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('POST', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.FactchecktoolsPagesCreateResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage])
                res.google_factchecking_factchecktools_v1alpha1_claim_review_markup_page = out

        return res

    def factchecktools_pages_delete(self, request: operations.FactchecktoolsPagesDeleteRequest, security: operations.FactchecktoolsPagesDeleteSecurity) -> operations.FactchecktoolsPagesDeleteResponse:
        r"""Delete all `ClaimReview` markup on a page."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.FactchecktoolsPagesDeleteRequest, base_url, '/v1alpha1/{name}', request)
        
        query_params = utils.get_query_params(operations.FactchecktoolsPagesDeleteRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('DELETE', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.FactchecktoolsPagesDeleteResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    def factchecktools_pages_get(self, request: operations.FactchecktoolsPagesGetRequest, security: operations.FactchecktoolsPagesGetSecurity) -> operations.FactchecktoolsPagesGetResponse:
        r"""Get all `ClaimReview` markup on a page."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.FactchecktoolsPagesGetRequest, base_url, '/v1alpha1/{name}', request)
        
        query_params = utils.get_query_params(operations.FactchecktoolsPagesGetRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.FactchecktoolsPagesGetResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage])
                res.google_factchecking_factchecktools_v1alpha1_claim_review_markup_page = out

        return res

    def factchecktools_pages_list(self, request: operations.FactchecktoolsPagesListRequest, security: operations.FactchecktoolsPagesListSecurity) -> operations.FactchecktoolsPagesListResponse:
        r"""List the `ClaimReview` markup pages for a specific URL or for an organization."""
        base_url = self._server_url
        
        url = base_url.removesuffix('/') + '/v1alpha1/pages'
        
        query_params = utils.get_query_params(operations.FactchecktoolsPagesListRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.FactchecktoolsPagesListResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse])
                res.google_factchecking_factchecktools_v1alpha1_list_claim_review_markup_pages_response = out

        return res

    def factchecktools_pages_update(self, request: operations.FactchecktoolsPagesUpdateRequest, security: operations.FactchecktoolsPagesUpdateSecurity) -> operations.FactchecktoolsPagesUpdateResponse:
        r"""Update for all `ClaimReview` markup on a page Note that this is a full update. To retain the existing `ClaimReview` markup on a page, first perform a Get operation, then modify the returned markup, and finally call Update with the entire `ClaimReview` markup as the body."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.FactchecktoolsPagesUpdateRequest, base_url, '/v1alpha1/{name}', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "google_factchecking_factchecktools_v1alpha1_claim_review_markup_page", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        query_params = utils.get_query_params(operations.FactchecktoolsPagesUpdateRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('PUT', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.FactchecktoolsPagesUpdateResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage])
                res.google_factchecking_factchecktools_v1alpha1_claim_review_markup_page = out

        return res

    