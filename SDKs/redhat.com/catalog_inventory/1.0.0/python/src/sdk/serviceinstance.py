import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class ServiceInstance:
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

    
    def list_service_instances(self, request: operations.ListServiceInstancesRequest) -> operations.ListServiceInstancesResponse:
        r"""List ServiceInstances
        Returns an array of ServiceInstance objects
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/service_instances"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceInstancesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceInstancesCollection])
                res.service_instances_collection = out

        return res

    
    def show_service_instance(self, request: operations.ShowServiceInstanceRequest) -> operations.ShowServiceInstanceResponse:
        r"""Show an existing ServiceInstance
        Returns a ServiceInstance object
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/service_instances/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ShowServiceInstanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceInstance])
                res.service_instance = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorNotFound])
                res.error_not_found = out

        return res

    