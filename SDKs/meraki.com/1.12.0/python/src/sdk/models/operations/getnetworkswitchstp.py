import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkSwitchStpPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSwitchStpRequest:
    path_params: GetNetworkSwitchStpPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkSwitchStpResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_switch_stp_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
