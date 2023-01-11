import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import pricing_v1_voice_voice_number as shared_pricing_v1_voice_voice_number


FETCH_VOICE_NUMBER_SERVERS = [
	"https://pricing.twilio.com",
]


@dataclasses.dataclass
class FetchVoiceNumberPathParams:
    number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Number', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchVoiceNumberSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchVoiceNumberRequest:
    path_params: FetchVoiceNumberPathParams = dataclasses.field()
    security: FetchVoiceNumberSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchVoiceNumberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pricing_v1_voice_voice_number: Optional[shared_pricing_v1_voice_voice_number.PricingV1VoiceVoiceNumber] = dataclasses.field(default=None)
    
