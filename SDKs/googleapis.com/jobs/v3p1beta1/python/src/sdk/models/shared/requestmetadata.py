import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deviceinfo as shared_deviceinfo


@dataclass_json
@dataclasses.dataclass
class RequestMetadata:
    r"""RequestMetadata
    Input only. Meta information related to the job searcher or entity conducting the job search. This information is used to improve the performance of the service.
    """
    
    device_info: Optional[shared_deviceinfo.DeviceInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceInfo') }})
    domain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    session_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionId') }})
    user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    
