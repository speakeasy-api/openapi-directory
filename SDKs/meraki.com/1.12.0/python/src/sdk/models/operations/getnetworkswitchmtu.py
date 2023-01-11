import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkSwitchMtuPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSwitchMtuRequest:
    path_params: GetNetworkSwitchMtuPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkSwitchMtuResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_switch_mtu_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
