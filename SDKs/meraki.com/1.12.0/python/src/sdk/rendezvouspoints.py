import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class RendezvousPoints:
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

    
    def create_network_switch_routing_multicast_rendezvous_point(self, request: operations.CreateNetworkSwitchRoutingMulticastRendezvousPointRequest) -> operations.CreateNetworkSwitchRoutingMulticastRendezvousPointResponse:
        r"""Create a multicast rendezvous point
        Create a multicast rendezvous point
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/routing/multicast/rendezvousPoints", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkSwitchRoutingMulticastRendezvousPointResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_switch_routing_multicast_rendezvous_point_201_application_json_object = out

        return res

    
    def delete_network_switch_routing_multicast_rendezvous_point(self, request: operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest) -> operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointResponse:
        r"""Delete a multicast rendezvous point
        Delete a multicast rendezvous point
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_network_switch_routing_multicast_rendezvous_point(self, request: operations.GetNetworkSwitchRoutingMulticastRendezvousPointRequest) -> operations.GetNetworkSwitchRoutingMulticastRendezvousPointResponse:
        r"""Return a multicast rendezvous point
        Return a multicast rendezvous point
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchRoutingMulticastRendezvousPointResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_routing_multicast_rendezvous_point_200_application_json_object = out

        return res

    
    def get_network_switch_routing_multicast_rendezvous_points(self, request: operations.GetNetworkSwitchRoutingMulticastRendezvousPointsRequest) -> operations.GetNetworkSwitchRoutingMulticastRendezvousPointsResponse:
        r"""List multicast rendezvous points
        List multicast rendezvous points
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/routing/multicast/rendezvousPoints", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchRoutingMulticastRendezvousPointsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_routing_multicast_rendezvous_points_200_application_json_object = out

        return res

    
    def update_network_switch_routing_multicast_rendezvous_point(self, request: operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest) -> operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse:
        r"""Update a multicast rendezvous point
        Update a multicast rendezvous point
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_routing_multicast_rendezvous_point_200_application_json_object = out

        return res

    