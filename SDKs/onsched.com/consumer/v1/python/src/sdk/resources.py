import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Resources:
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

    
    def get_consumer_v1_resources(self, request: operations.GetConsumerV1ResourcesRequest) -> operations.GetConsumerV1ResourcesResponse:
        r"""Returns a list of resources.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/consumer/v1/resources"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1ResourcesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.resource_list_view_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_consumer_v1_resources_id_(self, request: operations.GetConsumerV1ResourcesIDRequest) -> operations.GetConsumerV1ResourcesIDResponse:
        r"""Returns a resource object.
        The result returned is a single resource object. An id is required to find the resource. Find customer id's using either the GET consumer/v1/resources end point,
        or the GET consumer/v1/appointments end point.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/resources/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1ResourcesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceViewModel])
                res.resource_view_model = out

        return res

    
    def get_consumer_v1_resources_id_services(self, request: operations.GetConsumerV1ResourcesIDServicesRequest) -> operations.GetConsumerV1ResourcesIDServicesResponse:
        r"""Returns a list of resource services.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        Resource services are used to explicitly define the services that can be booked for a resource. If no resource services are defined then by
        default all services can be booked for the resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/resources/{id}/services", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1ResourcesIDServicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.resource_service_list_view_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    