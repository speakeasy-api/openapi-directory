import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RtcCapabilityWebhooksEventURLHTTPMethodEnum(str, Enum):
    GET = "GET"
    POST = "POST"


@dataclass_json
@dataclasses.dataclass
class RtcCapabilityWebhooksEventURL:
    r"""RtcCapabilityWebhooksEventURL
    Vonage will send RTC events to this URL
    """
    
    address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    http_method: Optional[RtcCapabilityWebhooksEventURLHTTPMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http_method') }})
    

@dataclass_json
@dataclasses.dataclass
class RtcCapabilityWebhooks:
    event_url: Optional[RtcCapabilityWebhooksEventURL] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_url') }})
    

@dataclass_json
@dataclasses.dataclass
class RtcCapability:
    r"""RtcCapability
    RTC / Conversation Service related configuration
    """
    
    leg_persistence_time: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leg_persistence_time') }})
    signed_callbacks: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signed_callbacks') }})
    webhooks: Optional[RtcCapabilityWebhooks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhooks') }})
    
