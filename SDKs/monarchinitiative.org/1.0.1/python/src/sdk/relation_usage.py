import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class RelationUsage:
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

    
    def get_relation_usage_between_resource(self, request: operations.GetRelationUsageBetweenResourceRequest) -> operations.GetRelationUsageBetweenResourceResponse:
        r"""All relations used plus count of associations
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/relation/usage/between/{subject_category}/{object_category}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRelationUsageBetweenResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AssociationResults]])
                res.association_results = out

        return res

    
    def get_relation_usage_pivot_label_resource(self, request: operations.GetRelationUsagePivotLabelResourceRequest) -> operations.GetRelationUsagePivotLabelResourceResponse:
        r"""Relation usage count for all subj x obj category combinations, showing label
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/relation/usage/pivot/label"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRelationUsagePivotLabelResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AssociationResults]])
                res.association_results = out

        return res

    
    def get_relation_usage_pivot_resource(self, request: operations.GetRelationUsagePivotResourceRequest) -> operations.GetRelationUsagePivotResourceResponse:
        r"""Relation usage count for all subj x obj category combinations
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/relation/usage/pivot"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRelationUsagePivotResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AssociationResults]])
                res.association_results = out

        return res

    
    def get_relation_usage_resource(self, request: operations.GetRelationUsageResourceRequest) -> operations.GetRelationUsageResourceResponse:
        r"""All relations used plus count of associations
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/relation/usage/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRelationUsageResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AssociationResults]])
                res.association_results = out

        return res

    