import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkWirelessSsidDeviceTypeGroupPoliciesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest:
    path_params: GetNetworkWirelessSsidDeviceTypeGroupPoliciesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkWirelessSsidDeviceTypeGroupPoliciesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_wireless_ssid_device_type_group_policies_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
