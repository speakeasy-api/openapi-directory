import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class PromoteToRelayPathParams:
    node_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    
class PromoteToRelay200ApplicationJSONActionEnum(str, Enum):
    PROMOTE_TO_RELAY = "promoteToRelay"

class PromoteToRelay200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class PromoteToRelay200ApplicationJSON:
    action: PromoteToRelay200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: PromoteToRelay200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class PromoteToRelayRequest:
    path_params: PromoteToRelayPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PromoteToRelayResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    promote_to_relay_200_application_json_object: Optional[PromoteToRelay200ApplicationJSON] = dataclasses.field(default=None)
    
