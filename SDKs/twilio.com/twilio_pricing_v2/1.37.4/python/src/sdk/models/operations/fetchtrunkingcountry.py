import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import pricing_v2_trunking_country_instance as shared_pricing_v2_trunking_country_instance


FETCH_TRUNKING_COUNTRY_SERVERS = [
	"https://pricing.twilio.com",
]


@dataclasses.dataclass
class FetchTrunkingCountryPathParams:
    iso_country: str = dataclasses.field(metadata={'path_param': { 'field_name': 'IsoCountry', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchTrunkingCountrySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchTrunkingCountryRequest:
    path_params: FetchTrunkingCountryPathParams = dataclasses.field()
    security: FetchTrunkingCountrySecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchTrunkingCountryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pricing_v2_trunking_country_instance: Optional[shared_pricing_v2_trunking_country_instance.PricingV2TrunkingCountryInstance] = dataclasses.field(default=None)
    
