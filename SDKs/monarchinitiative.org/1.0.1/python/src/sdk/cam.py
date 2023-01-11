import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Cam:
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

    
    def get_activity_collection(self, request: operations.GetActivityCollectionRequest) -> operations.GetActivityCollectionResponse:
        r"""Returns list of models
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/cam/activity"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetActivityCollectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_instance_object(self, request: operations.GetInstanceObjectRequest) -> operations.GetInstanceObjectResponse:
        r"""Returns list of matches
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/cam/instance/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstanceObjectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Association]])
                res.associations = out

        return res

    
    def get_model_collection(self) -> operations.GetModelCollectionResponse:
        r"""Returns list of ALL models
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/cam/model"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetModelCollectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_model_contributors(self) -> operations.GetModelContributorsResponse:
        r"""Returns list of all contributors across all models
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/cam/model/contributors"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetModelContributorsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_model_instances(self) -> operations.GetModelInstancesResponse:
        r"""Returns list of all instances
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/cam/instances"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetModelInstancesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_model_object(self, request: operations.GetModelObjectRequest) -> operations.GetModelObjectResponse:
        r"""Returns a complete model
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/cam/model/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetModelObjectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_model_properties(self, request: operations.GetModelPropertiesRequest) -> operations.GetModelPropertiesResponse:
        r"""Returns list of all properties used across all models
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/cam/model/properties"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetModelPropertiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_model_property_values(self, request: operations.GetModelPropertyValuesRequest) -> operations.GetModelPropertyValuesResponse:
        r"""Returns list property-values for all models
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/cam/model/property_values"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetModelPropertyValuesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_model_query(self, request: operations.GetModelQueryRequest) -> operations.GetModelQueryResponse:
        r"""Returns list of models matching query
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/cam/model/query"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetModelQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_physical_interaction(self, request: operations.GetPhysicalInteractionRequest) -> operations.GetPhysicalInteractionResponse:
        r"""Returns list of models
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/cam/physical_interaction"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPhysicalInteractionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    