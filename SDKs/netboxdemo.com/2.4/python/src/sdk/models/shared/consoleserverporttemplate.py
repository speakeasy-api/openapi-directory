import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import nesteddevicetype as shared_nesteddevicetype


@dataclass_json
@dataclasses.dataclass
class ConsoleServerPortTemplate:
    device_type: shared_nesteddevicetype.NestedDeviceType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device_type') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
