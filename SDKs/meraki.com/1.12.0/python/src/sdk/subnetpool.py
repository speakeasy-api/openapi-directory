import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class SubnetPool:
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

    
    def get_network_cellular_gateway_subnet_pool(self, request: operations.GetNetworkCellularGatewaySubnetPoolRequest) -> operations.GetNetworkCellularGatewaySubnetPoolResponse:
        r"""Return the subnet pool and mask configured for MGs in the network.
        Return the subnet pool and mask configured for MGs in the network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/cellularGateway/subnetPool", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkCellularGatewaySubnetPoolResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_cellular_gateway_subnet_pool_200_application_json_object = out

        return res

    
    def update_network_cellular_gateway_subnet_pool(self, request: operations.UpdateNetworkCellularGatewaySubnetPoolRequest) -> operations.UpdateNetworkCellularGatewaySubnetPoolResponse:
        r"""Update the subnet pool and mask configuration for MGs in the network.
        Update the subnet pool and mask configuration for MGs in the network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/cellularGateway/subnetPool", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkCellularGatewaySubnetPoolResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_cellular_gateway_subnet_pool_200_application_json_object = out

        return res

    