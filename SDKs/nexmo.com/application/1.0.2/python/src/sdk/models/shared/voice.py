import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class VoiceWebhooksEndpointTypeEnum(str, Enum):
    ANSWER_URL = "answer_url"
    EVENT_URL = "event_url"

class VoiceWebhooksHTTPMethodEnum(str, Enum):
    GET = "GET"
    POST = "POST"


@dataclass_json
@dataclasses.dataclass
class VoiceWebhooks:
    endpoint: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint') }})
    endpoint_type: VoiceWebhooksEndpointTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint_type') }})
    http_method: VoiceWebhooksHTTPMethodEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('http_method') }})
    

@dataclass_json
@dataclasses.dataclass
class Voice:
    r"""Voice
    The Nexmo product that you access with this application.
    """
    
    webhooks: Optional[list[VoiceWebhooks]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhooks') }})
    
