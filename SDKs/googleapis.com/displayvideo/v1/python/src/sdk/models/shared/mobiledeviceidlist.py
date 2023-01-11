import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class MobileDeviceIDList:
    r"""MobileDeviceIDList
    Wrapper message for a list of mobile device IDs defining Customer Match audience members.
    """
    
    mobile_device_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileDeviceIds') }})
    
