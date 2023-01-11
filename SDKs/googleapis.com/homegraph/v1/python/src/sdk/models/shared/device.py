import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deviceinfo as shared_deviceinfo
from ..shared import devicenames as shared_devicenames
from ..shared import agentotherdeviceid as shared_agentotherdeviceid


@dataclass_json
@dataclasses.dataclass
class Device:
    r"""Device
    Third-party device definition. Next ID = 14
    """
    
    attributes: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    custom_data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customData') }})
    device_info: Optional[shared_deviceinfo.DeviceInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceInfo') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[shared_devicenames.DeviceNames] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notification_supported_by_agent: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationSupportedByAgent') }})
    other_device_ids: Optional[list[shared_agentotherdeviceid.AgentOtherDeviceID]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otherDeviceIds') }})
    room_hint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roomHint') }})
    structure_hint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('structureHint') }})
    traits: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('traits') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    will_report_state: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('willReportState') }})
    
