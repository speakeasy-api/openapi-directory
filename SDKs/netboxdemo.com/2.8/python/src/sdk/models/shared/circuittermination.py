import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import nestedcable as shared_nestedcable
from ..shared import nestedcircuit as shared_nestedcircuit
from ..shared import nestedsite as shared_nestedsite

class CircuitTerminationConnectionStatusLabelEnum(str, Enum):
    NOT_CONNECTED = "Not Connected"
    CONNECTED = "Connected"


@dataclass_json
@dataclasses.dataclass
class CircuitTerminationConnectionStatus:
    label: CircuitTerminationConnectionStatusLabelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class CircuitTerminationTerminationEnum(str, Enum):
    A = "A"
    Z = "Z"


@dataclass_json
@dataclasses.dataclass
class CircuitTermination:
    circuit: shared_nestedcircuit.NestedCircuit = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('circuit') }})
    port_speed: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('port_speed') }})
    site: shared_nestedsite.NestedSite = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('site') }})
    term_side: CircuitTerminationTerminationEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('term_side') }})
    cable: Optional[shared_nestedcable.NestedCable] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cable') }})
    connected_endpoint: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connected_endpoint') }})
    connected_endpoint_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connected_endpoint_type') }})
    connection_status: Optional[CircuitTerminationConnectionStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connection_status') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    pp_info: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pp_info') }})
    upstream_speed: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upstream_speed') }})
    xconnect_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xconnect_id') }})
    
