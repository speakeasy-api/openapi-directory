import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import pricing_v2_voice_voice_number as shared_pricing_v2_voice_voice_number


FETCH_VOICE_NUMBER_SERVERS = [
	"https://pricing.twilio.com",
]


@dataclasses.dataclass
class FetchVoiceNumberPathParams:
    destination_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'DestinationNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchVoiceNumberQueryParams:
    origination_number: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'OriginationNumber', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FetchVoiceNumberSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchVoiceNumberRequest:
    path_params: FetchVoiceNumberPathParams = dataclasses.field()
    query_params: FetchVoiceNumberQueryParams = dataclasses.field()
    security: FetchVoiceNumberSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchVoiceNumberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pricing_v2_voice_voice_number: Optional[shared_pricing_v2_voice_voice_number.PricingV2VoiceVoiceNumber] = dataclasses.field(default=None)
    
