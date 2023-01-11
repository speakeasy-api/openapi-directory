import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkSwitchStackPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    switch_stack_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'switchStackId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSwitchStackRequest:
    path_params: GetNetworkSwitchStackPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkSwitchStackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_switch_stack_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
