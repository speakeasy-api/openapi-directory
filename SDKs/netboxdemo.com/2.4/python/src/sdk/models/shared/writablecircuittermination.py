import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class WritableCircuitTerminationTerminationEnum(str, Enum):
    A = "A"
    Z = "Z"


@dataclass_json
@dataclasses.dataclass
class WritableCircuitTerminationInput:
    circuit: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('circuit') }})
    port_speed: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('port_speed') }})
    site: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('site') }})
    term_side: WritableCircuitTerminationTerminationEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('term_side') }})
    interface: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interface') }})
    pp_info: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pp_info') }})
    upstream_speed: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upstream_speed') }})
    xconnect_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xconnect_id') }})
    
