import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import interfacenestedcircuit as shared_interfacenestedcircuit

class InterfaceCircuitTerminationTerminationEnum(str, Enum):
    A = "A"
    Z = "Z"


@dataclass_json
@dataclasses.dataclass
class InterfaceCircuitTermination:
    port_speed: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('port_speed') }})
    term_side: InterfaceCircuitTerminationTerminationEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('term_side') }})
    circuit: Optional[shared_interfacenestedcircuit.InterfaceNestedCircuit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('circuit') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    pp_info: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pp_info') }})
    upstream_speed: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upstream_speed') }})
    xconnect_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xconnect_id') }})
    
