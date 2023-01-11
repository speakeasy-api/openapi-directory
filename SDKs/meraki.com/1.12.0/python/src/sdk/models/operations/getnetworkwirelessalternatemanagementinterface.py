import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkWirelessAlternateManagementInterfacePathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkWirelessAlternateManagementInterfaceRequest:
    path_params: GetNetworkWirelessAlternateManagementInterfacePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkWirelessAlternateManagementInterfaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_wireless_alternate_management_interface_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
