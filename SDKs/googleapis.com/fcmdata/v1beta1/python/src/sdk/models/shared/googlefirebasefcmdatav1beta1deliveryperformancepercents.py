import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents:
    r"""GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents
    Overview of delivery performance for messages that were successfully delivered. All percentages are calculated with countMessagesAccepted as the denominator. These categories are not mutually exclusive; a message can be delayed for multiple reasons.
    """
    
    delayed_device_doze: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delayedDeviceDoze') }})
    delayed_device_offline: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delayedDeviceOffline') }})
    delayed_message_throttled: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delayedMessageThrottled') }})
    delayed_user_stopped: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delayedUserStopped') }})
    delivered_no_delay: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveredNoDelay') }})
    
