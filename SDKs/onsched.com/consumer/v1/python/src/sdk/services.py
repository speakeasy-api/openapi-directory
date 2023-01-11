import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Services:
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

    
    def get_consumer_v1_services(self, request: operations.GetConsumerV1ServicesRequest) -> operations.GetConsumerV1ServicesResponse:
        r"""Returns a list of services.
        Use this endpoint to get services available at your business location and/or company. If no locationId is provided the primary company will be queried. 
        The results are returned in pages. Use the offset and limit parameters to control the page start and size.
        Default offset is <b>0</b>, and limit is <b>20</b>. Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/consumer/v1/services"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1ServicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.service_list_view_model = out

        return res

    
    def get_consumer_v1_services_allocations_id_(self, request: operations.GetConsumerV1ServicesAllocationsIDRequest) -> operations.GetConsumerV1ServicesAllocationsIDResponse:
        r"""Get a service allocation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/services/allocations/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1ServicesAllocationsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceAllocationViewModel])
                res.service_allocation_view_model = out

        return res

    
    def get_consumer_v1_services_id_(self, request: operations.GetConsumerV1ServicesIDRequest) -> operations.GetConsumerV1ServicesIDResponse:
        r"""Returns a service object.
        The result returned is a single service object. An id is required to find the service. Find service id's using either the GET consumer/v1/service end point,
        or the GET consumer/v1/appointments end point.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/services/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1ServicesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceViewModel])
                res.service_view_model = out

        return res

    
    def get_consumer_v1_services_id_allocations(self, request: operations.GetConsumerV1ServicesIDAllocationsRequest) -> operations.GetConsumerV1ServicesIDAllocationsResponse:
        r"""Returns a list of service allocations.
        This endpoint is used primarily for event booking. When you create service type events, you allocation specific occurrences of the event 
        against the service. 
        
        You can retrieve all allocations for a location by passing in zero as the service id. Otherwise, to get allocations for a specific service
        pass in the service id.
        
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/services/{id}/allocations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1ServicesIDAllocationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.service_allocation_list_view_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_consumer_v1_services_id_resources(self, request: operations.GetConsumerV1ServicesIDResourcesRequest) -> operations.GetConsumerV1ServicesIDResourcesResponse:
        r"""Returns a list of resources.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/services/{id}/resources", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1ServicesIDResourcesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.resource_list_view_model = out

        return res

    