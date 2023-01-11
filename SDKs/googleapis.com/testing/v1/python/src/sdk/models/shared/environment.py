import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import androiddevice as shared_androiddevice
from ..shared import iosdevice as shared_iosdevice


@dataclass_json
@dataclasses.dataclass
class Environment:
    r"""Environment
    The environment in which the test is run.
    """
    
    android_device: Optional[shared_androiddevice.AndroidDevice] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidDevice') }})
    ios_device: Optional[shared_iosdevice.IosDevice] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosDevice') }})
    
