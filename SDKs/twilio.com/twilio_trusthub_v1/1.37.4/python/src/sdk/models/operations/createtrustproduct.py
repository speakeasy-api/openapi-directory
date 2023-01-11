import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import trusthub_v1_trust_product as shared_trusthub_v1_trust_product


CREATE_TRUST_PRODUCT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclasses.dataclass
class CreateTrustProductCreateTrustProductRequest:
    email: str = dataclasses.field(metadata={'form': { 'field_name': 'Email' }})
    friendly_name: str = dataclasses.field(metadata={'form': { 'field_name': 'FriendlyName' }})
    policy_sid: str = dataclasses.field(metadata={'form': { 'field_name': 'PolicySid' }})
    status_callback: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    

@dataclasses.dataclass
class CreateTrustProductSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateTrustProductRequest:
    security: CreateTrustProductSecurity = dataclasses.field()
    request: Optional[CreateTrustProductCreateTrustProductRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateTrustProductResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    trusthub_v1_trust_product: Optional[shared_trusthub_v1_trust_product.TrusthubV1TrustProduct] = dataclasses.field(default=None)
    
