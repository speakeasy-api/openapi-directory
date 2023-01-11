import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkSwitchAlternateManagementInterfacePathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSwitchAlternateManagementInterfaceRequest:
    path_params: GetNetworkSwitchAlternateManagementInterfacePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkSwitchAlternateManagementInterfaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_switch_alternate_management_interface_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
