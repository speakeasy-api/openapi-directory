import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class AddNetworkSwitchStackPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    switch_stack_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'switchStackId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AddNetworkSwitchStackRequestBody:
    serial: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serial') }})
    

@dataclasses.dataclass
class AddNetworkSwitchStackRequest:
    path_params: AddNetworkSwitchStackPathParams = dataclasses.field()
    request: AddNetworkSwitchStackRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddNetworkSwitchStackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    add_network_switch_stack_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
