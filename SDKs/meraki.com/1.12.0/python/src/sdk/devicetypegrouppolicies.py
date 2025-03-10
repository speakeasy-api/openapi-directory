import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class DeviceTypeGroupPolicies:
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

    
    def get_network_wireless_ssid_device_type_group_policies(self, request: operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest) -> operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesResponse:
        r"""List the device type group policies for the SSID
        List the device type group policies for the SSID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/deviceTypeGroupPolicies", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_device_type_group_policies_200_application_json_object = out

        return res

    
    def update_network_wireless_ssid_device_type_group_policies(self, request: operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest) -> operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse:
        r"""Update the device type group policies for the SSID
        Update the device type group policies for the SSID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/deviceTypeGroupPolicies", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_ssid_device_type_group_policies_200_application_json_object = out

        return res

    