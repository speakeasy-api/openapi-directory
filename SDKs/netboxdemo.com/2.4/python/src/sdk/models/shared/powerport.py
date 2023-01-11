import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import nesteddevice as shared_nesteddevice
from ..shared import nestedpoweroutlet as shared_nestedpoweroutlet


@dataclass_json
@dataclasses.dataclass
class PowerPort:
    device: shared_nesteddevice.NestedDevice = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    connection_status: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connection_status') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    power_outlet: Optional[shared_nestedpoweroutlet.NestedPowerOutlet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('power_outlet') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
