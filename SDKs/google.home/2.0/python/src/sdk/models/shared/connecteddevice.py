import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import device as shared_device


@dataclass_json
@dataclasses.dataclass
class ConnectedDevice:
    device: shared_device.Device = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    enabled_profiles: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled_profiles') }})
    
