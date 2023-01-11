import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import devicereference as shared_devicereference


@dataclass_json
@dataclasses.dataclass
class CustomerRemoveConfigurationRequest:
    r"""CustomerRemoveConfigurationRequest
    Request message for customer to remove the configuration from device.
    """
    
    device: Optional[shared_devicereference.DeviceReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    
