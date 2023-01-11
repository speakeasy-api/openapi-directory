import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import androiddevice as shared_androiddevice


@dataclass_json
@dataclasses.dataclass
class AndroidDeviceList:
    r"""AndroidDeviceList
    A list of Android device configurations in which the test is to be executed.
    """
    
    android_devices: Optional[list[shared_androiddevice.AndroidDevice]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidDevices') }})
    
