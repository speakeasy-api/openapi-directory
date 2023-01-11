import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Example112:
    device_class: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device_class') }})
    device_type: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device_type') }})
    expected_profiles: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expected_profiles') }})
    mac_address: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac_address') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rssi: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rssi') }})
    
