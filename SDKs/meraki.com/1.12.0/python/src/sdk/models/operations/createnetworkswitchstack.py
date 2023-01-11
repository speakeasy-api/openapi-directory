import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateNetworkSwitchStackPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkSwitchStackRequestBody:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    serials: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serials') }})
    

@dataclasses.dataclass
class CreateNetworkSwitchStackRequest:
    path_params: CreateNetworkSwitchStackPathParams = dataclasses.field()
    request: CreateNetworkSwitchStackRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateNetworkSwitchStackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_network_switch_stack_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
