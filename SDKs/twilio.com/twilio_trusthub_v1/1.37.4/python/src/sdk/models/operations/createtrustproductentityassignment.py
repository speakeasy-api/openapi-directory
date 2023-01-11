import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import trusthub_v1_trust_product_trust_product_entity_assignment as shared_trusthub_v1_trust_product_trust_product_entity_assignment


CREATE_TRUST_PRODUCT_ENTITY_ASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclasses.dataclass
class CreateTrustProductEntityAssignmentPathParams:
    trust_product_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TrustProductSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateTrustProductEntityAssignmentCreateTrustProductEntityAssignmentRequest:
    object_sid: str = dataclasses.field(metadata={'form': { 'field_name': 'ObjectSid' }})
    

@dataclasses.dataclass
class CreateTrustProductEntityAssignmentSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateTrustProductEntityAssignmentRequest:
    path_params: CreateTrustProductEntityAssignmentPathParams = dataclasses.field()
    security: CreateTrustProductEntityAssignmentSecurity = dataclasses.field()
    request: Optional[CreateTrustProductEntityAssignmentCreateTrustProductEntityAssignmentRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateTrustProductEntityAssignmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    trusthub_v1_trust_product_trust_product_entity_assignment: Optional[shared_trusthub_v1_trust_product_trust_product_entity_assignment.TrusthubV1TrustProductTrustProductEntityAssignment] = dataclasses.field(default=None)
    
