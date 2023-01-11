import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import nestedcircuit as shared_nestedcircuit
from ..shared import nestedinterface as shared_nestedinterface
from ..shared import nestedsite as shared_nestedsite

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
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    interface: Optional[shared_nestedinterface.NestedInterface] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interface') }})
    pp_info: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pp_info') }})
    upstream_speed: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upstream_speed') }})
    xconnect_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xconnect_id') }})
    
