import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import endpointphonefrom as shared_endpointphonefrom
from ..shared import endpointphoneto as shared_endpointphoneto
from ..shared import endpointsip as shared_endpointsip
from ..shared import endpointwebsocket as shared_endpointwebsocket
from ..shared import endpointvbcextension as shared_endpointvbcextension

class CreateCallRequestNccoEventMethodEnum(str, Enum):
    POST = "POST"
    GET = "GET"

class CreateCallRequestNccoMachineDetectionEnum(str, Enum):
    CONTINUE = "continue"
    HANGUP = "hangup"


@dataclass_json
@dataclasses.dataclass
class CreateCallRequestNcco:
    from_: shared_endpointphonefrom.EndpointPhoneFrom = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    ncco: list[dict[str, Any]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ncco') }})
    to: list[Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    event_method: Optional[CreateCallRequestNccoEventMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_method') }})
    event_url: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_url') }})
    length_timer: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length_timer') }})
    machine_detection: Optional[CreateCallRequestNccoMachineDetectionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machine_detection') }})
    random_from_number: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('random_from_number') }})
    ringing_timer: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ringing_timer') }})
    
