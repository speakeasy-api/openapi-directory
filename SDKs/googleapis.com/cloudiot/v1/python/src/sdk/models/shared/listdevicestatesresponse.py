import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import devicestate as shared_devicestate


@dataclass_json
@dataclasses.dataclass
class ListDeviceStatesResponse:
    r"""ListDeviceStatesResponse
    Response for `ListDeviceStates`.
    """
    
    device_states: Optional[list[shared_devicestate.DeviceState]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceStates') }})
    
