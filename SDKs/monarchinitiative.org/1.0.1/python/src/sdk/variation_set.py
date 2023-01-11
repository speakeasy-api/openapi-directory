import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class VariationSet:
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

    
    def delete_variant_set_item(self, request: operations.DeleteVariantSetItemRequest) -> operations.DeleteVariantSetItemResponse:
        r"""Deletes variant set
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/variation/set/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteVariantSetItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_variant_analyze(self, request: operations.GetVariantAnalyzeRequest) -> operations.GetVariantAnalyzeResponse:
        r"""Returns list of matches
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/variation/set/analyze/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVariantAnalyzeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Association]])
                res.associations = out

        return res

    
    def get_variant_set_item(self, request: operations.GetVariantSetItemRequest) -> operations.GetVariantSetItemResponse:
        r"""Returns a variant set
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/variation/set/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVariantSetItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VariantSet])
                res.variant_set = out
        elif r.status_code == 404:
            pass

        return res

    
    def get_variant_sets_archive_collection(self, request: operations.GetVariantSetsArchiveCollectionRequest) -> operations.GetVariantSetsArchiveCollectionResponse:
        r"""Returns list of variant sets from a specified time period
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/variation/set/archive/{year}/{month}/{day}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVariantSetsArchiveCollectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PageOfVariantSets])
                res.page_of_variant_sets = out

        return res

    
    def get_variant_sets_collection(self, request: operations.GetVariantSetsCollectionRequest) -> operations.GetVariantSetsCollectionResponse:
        r"""Returns list of variant sets
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/variation/set/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVariantSetsCollectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PageOfVariantSets])
                res.page_of_variant_sets = out

        return res

    
    def post_variant_sets_collection(self, request: operations.PostVariantSetsCollectionRequest) -> operations.PostVariantSetsCollectionResponse:
        r"""Creates a new variant set
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/variation/set/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostVariantSetsCollectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_variant_set_item(self, request: operations.PutVariantSetItemRequest) -> operations.PutVariantSetItemResponse:
        r"""Updates a variant set
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/variation/set/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutVariantSetItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    