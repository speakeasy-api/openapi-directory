import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkSwitchStormControlPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSwitchStormControlRequest:
    path_params: GetNetworkSwitchStormControlPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkSwitchStormControlResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_switch_storm_control_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
