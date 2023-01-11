import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class VoiceCapabilityPaymentsGatewaysModeEnum(str, Enum):
    TEST = "test"
    LIVE = "live"


@dataclass_json
@dataclasses.dataclass
class VoiceCapabilityPaymentsGateways:
    credential: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credential') }})
    mode: Optional[VoiceCapabilityPaymentsGatewaysModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class VoiceCapabilityPayments:
    r"""VoiceCapabilityPayments
    encompass all the payment related fields
    """
    
    gateways: Optional[list[VoiceCapabilityPaymentsGateways]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gateways') }})
    
class VoiceCapabilityWebhooksAnswerURLHTTPMethodEnum(str, Enum):
    GET = "GET"
    POST = "POST"


@dataclass_json
@dataclasses.dataclass
class VoiceCapabilityWebhooksAnswerURL:
    address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    connection_timeout: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connection_timeout') }})
    http_method: Optional[VoiceCapabilityWebhooksAnswerURLHTTPMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http_method') }})
    socket_timeout: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('socket_timeout') }})
    
class VoiceCapabilityWebhooksEventURLHTTPMethodEnum(str, Enum):
    GET = "GET"
    POST = "POST"


@dataclass_json
@dataclasses.dataclass
class VoiceCapabilityWebhooksEventURL:
    r"""VoiceCapabilityWebhooksEventURL
    Vonage will send call events (e.g. `ringing`, `answered`) to this URL
    """
    
    address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    connection_timeout: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connection_timeout') }})
    http_method: Optional[VoiceCapabilityWebhooksEventURLHTTPMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http_method') }})
    socket_timeout: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('socket_timeout') }})
    
class VoiceCapabilityWebhooksFallbackAnswerURLHTTPMethodEnum(str, Enum):
    GET = "GET"
    POST = "POST"


@dataclass_json
@dataclasses.dataclass
class VoiceCapabilityWebhooksFallbackAnswerURL:
    address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    connection_timeout: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connection_timeout') }})
    http_method: Optional[VoiceCapabilityWebhooksFallbackAnswerURLHTTPMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http_method') }})
    socket_timeout: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('socket_timeout') }})
    

@dataclass_json
@dataclasses.dataclass
class VoiceCapabilityWebhooks:
    answer_url: Optional[VoiceCapabilityWebhooksAnswerURL] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answer_url') }})
    event_url: Optional[VoiceCapabilityWebhooksEventURL] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_url') }})
    fallback_answer_url: Optional[VoiceCapabilityWebhooksFallbackAnswerURL] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fallback_answer_url') }})
    

@dataclass_json
@dataclasses.dataclass
class VoiceCapability:
    r"""VoiceCapability
    Voice related configuration
    """
    
    conversation_ttl: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversation_ttl') }})
    payments: Optional[VoiceCapabilityPayments] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payments') }})
    signed_callbacks: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signed_callbacks') }})
    webhooks: Optional[VoiceCapabilityWebhooks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhooks') }})
    
