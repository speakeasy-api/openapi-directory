import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Feature:
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

    
    def get_feature(self, request: operations.GetFeatureRequest) -> operations.GetFeatureResponse:
        r"""Feature Detail
        Return the content of the selected feature.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/feature/{featureId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFeatureResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_feature_200_application_json_object = out

        return res

    
    def list_feature_types(self, request: operations.ListFeatureTypesRequest) -> operations.ListFeatureTypesResponse:
        r"""Feature Type Collection
        Return a collection of Feature Types.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/feature-type"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListFeatureTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.list_feature_types_200_application_json_object = out

        return res

    
    def list_features(self, request: operations.ListFeaturesRequest) -> operations.ListFeaturesResponse:
        r"""Feature Collection
        Return a collection of Feature.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/feature"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListFeaturesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.list_features_200_application_json_object = out

        return res

    