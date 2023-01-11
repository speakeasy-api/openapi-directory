import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import pricing_v2_trunking_number as shared_pricing_v2_trunking_number


FETCH_TRUNKING_NUMBER_SERVERS = [
	"https://pricing.twilio.com",
]


@dataclasses.dataclass
class FetchTrunkingNumberPathParams:
    destination_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'DestinationNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchTrunkingNumberQueryParams:
    origination_number: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'OriginationNumber', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FetchTrunkingNumberSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchTrunkingNumberRequest:
    path_params: FetchTrunkingNumberPathParams = dataclasses.field()
    query_params: FetchTrunkingNumberQueryParams = dataclasses.field()
    security: FetchTrunkingNumberSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchTrunkingNumberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pricing_v2_trunking_number: Optional[shared_pricing_v2_trunking_number.PricingV2TrunkingNumber] = dataclasses.field(default=None)
    
