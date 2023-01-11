import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import iosdevice as shared_iosdevice


@dataclass_json
@dataclasses.dataclass
class IosDeviceList:
    r"""IosDeviceList
    A list of iOS device configurations in which the test is to be executed.
    """
    
    ios_devices: Optional[list[shared_iosdevice.IosDevice]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosDevices') }})
    
