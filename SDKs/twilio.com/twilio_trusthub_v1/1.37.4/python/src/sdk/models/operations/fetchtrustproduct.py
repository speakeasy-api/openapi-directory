import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import trusthub_v1_trust_product as shared_trusthub_v1_trust_product


FETCH_TRUST_PRODUCT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclasses.dataclass
class FetchTrustProductPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchTrustProductSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchTrustProductRequest:
    path_params: FetchTrustProductPathParams = dataclasses.field()
    security: FetchTrustProductSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchTrustProductResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    trusthub_v1_trust_product: Optional[shared_trusthub_v1_trust_product.TrusthubV1TrustProduct] = dataclasses.field(default=None)
    
