import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkSwitchPortSchedulesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSwitchPortSchedulesRequest:
    path_params: GetNetworkSwitchPortSchedulesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkSwitchPortSchedulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_switch_port_schedules_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
