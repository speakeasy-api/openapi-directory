import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class ServiceOffering:
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

    
    def applied_inventories_tags_for_service_offering(self, request: operations.AppliedInventoriesTagsForServiceOfferingRequest) -> operations.AppliedInventoriesTagsForServiceOfferingResponse:
        r"""Invokes computing of ServiceInventories tags for given ServiceOffering
        Returns an array of inventories tags
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/service_offerings/{id}/applied_inventories_tags", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AppliedInventoriesTagsForServiceOfferingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Tag]])
                res.tags = out
        elif r.status_code == 400:
            pass

        return res

    
    def list_service_offering_service_instances(self, request: operations.ListServiceOfferingServiceInstancesRequest) -> operations.ListServiceOfferingServiceInstancesResponse:
        r"""List ServiceInstances for ServiceOffering
        Returns an array of ServiceInstance objects
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/service_offerings/{id}/service_instances", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceOfferingServiceInstancesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceInstancesCollection])
                res.service_instances_collection = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorNotFound])
                res.error_not_found = out

        return res

    
    def list_service_offering_service_offering_nodes(self, request: operations.ListServiceOfferingServiceOfferingNodesRequest) -> operations.ListServiceOfferingServiceOfferingNodesResponse:
        r"""List ServiceOfferingNodes for ServiceOffering
        Returns an array of ServiceOfferingNode objects
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/service_offerings/{id}/service_offering_nodes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceOfferingServiceOfferingNodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceOfferingNodesCollection])
                res.service_offering_nodes_collection = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorNotFound])
                res.error_not_found = out

        return res

    
    def list_service_offering_service_plans(self, request: operations.ListServiceOfferingServicePlansRequest) -> operations.ListServiceOfferingServicePlansResponse:
        r"""List ServicePlans for ServiceOffering
        Returns an array of ServicePlan objects
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/service_offerings/{id}/service_plans", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceOfferingServicePlansResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServicePlansCollection])
                res.service_plans_collection = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorNotFound])
                res.error_not_found = out

        return res

    
    def list_service_offerings(self, request: operations.ListServiceOfferingsRequest) -> operations.ListServiceOfferingsResponse:
        r"""List ServiceOfferings
        Returns an array of ServiceOffering objects
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/service_offerings"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceOfferingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceOfferingsCollection])
                res.service_offerings_collection = out

        return res

    
    def order_service_offering(self, request: operations.OrderServiceOfferingRequest) -> operations.OrderServiceOfferingResponse:
        r"""Order an existing ServiceOffering
        Returns a Task id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/service_offerings/{id}/order", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OrderServiceOfferingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.OrderServiceOffering200ApplicationJSON])
                res.order_service_offering_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def show_service_offering(self, request: operations.ShowServiceOfferingRequest) -> operations.ShowServiceOfferingResponse:
        r"""Show an existing ServiceOffering
        Returns a ServiceOffering object
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/service_offerings/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ShowServiceOfferingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceOffering])
                res.service_offering = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorNotFound])
                res.error_not_found = out

        return res

    