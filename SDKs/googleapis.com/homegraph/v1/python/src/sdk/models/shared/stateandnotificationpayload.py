import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportstateandnotificationdevice as shared_reportstateandnotificationdevice


@dataclass_json
@dataclasses.dataclass
class StateAndNotificationPayload:
    r"""StateAndNotificationPayload
    Payload containing the state and notification information for devices.
    """
    
    devices: Optional[shared_reportstateandnotificationdevice.ReportStateAndNotificationDevice] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devices') }})
    
