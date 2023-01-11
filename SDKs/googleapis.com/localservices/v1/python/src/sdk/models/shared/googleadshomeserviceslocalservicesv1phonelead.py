import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleAdsHomeservicesLocalservicesV1PhoneLead:
    r"""GoogleAdsHomeservicesLocalservicesV1PhoneLead
    Container for phone lead specific information.
    """
    
    charged_call_timestamp: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargedCallTimestamp') }})
    charged_connected_call_duration_seconds: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargedConnectedCallDurationSeconds') }})
    consumer_phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerPhoneNumber') }})
    
