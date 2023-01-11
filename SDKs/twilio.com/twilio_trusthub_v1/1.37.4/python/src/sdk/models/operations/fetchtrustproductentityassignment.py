import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import trusthub_v1_trust_product_trust_product_entity_assignment as shared_trusthub_v1_trust_product_trust_product_entity_assignment


FETCH_TRUST_PRODUCT_ENTITY_ASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclasses.dataclass
class FetchTrustProductEntityAssignmentPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    trust_product_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TrustProductSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchTrustProductEntityAssignmentSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchTrustProductEntityAssignmentRequest:
    path_params: FetchTrustProductEntityAssignmentPathParams = dataclasses.field()
    security: FetchTrustProductEntityAssignmentSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchTrustProductEntityAssignmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    trusthub_v1_trust_product_trust_product_entity_assignment: Optional[shared_trusthub_v1_trust_product_trust_product_entity_assignment.TrusthubV1TrustProductTrustProductEntityAssignment] = dataclasses.field(default=None)
    
