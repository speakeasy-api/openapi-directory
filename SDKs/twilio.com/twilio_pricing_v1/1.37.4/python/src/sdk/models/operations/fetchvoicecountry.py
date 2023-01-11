import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import pricing_v1_voice_voice_country_instance as shared_pricing_v1_voice_voice_country_instance


FETCH_VOICE_COUNTRY_SERVERS = [
	"https://pricing.twilio.com",
]


@dataclasses.dataclass
class FetchVoiceCountryPathParams:
    iso_country: str = dataclasses.field(metadata={'path_param': { 'field_name': 'IsoCountry', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchVoiceCountrySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchVoiceCountryRequest:
    path_params: FetchVoiceCountryPathParams = dataclasses.field()
    security: FetchVoiceCountrySecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchVoiceCountryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pricing_v1_voice_voice_country_instance: Optional[shared_pricing_v1_voice_voice_country_instance.PricingV1VoiceVoiceCountryInstance] = dataclasses.field(default=None)
    
