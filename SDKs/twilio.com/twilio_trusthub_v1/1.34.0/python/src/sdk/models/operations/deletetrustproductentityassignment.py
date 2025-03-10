from dataclasses import dataclass, field
from typing import Optional
DELETE_TRUST_PRODUCT_ENTITY_ASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class DeleteTrustProductEntityAssignmentPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    trust_product_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TrustProductSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTrustProductEntityAssignmentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteTrustProductEntityAssignmentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteTrustProductEntityAssignmentPathParams = field(default=None)
    security: DeleteTrustProductEntityAssignmentSecurity = field(default=None)
    

@dataclass
class DeleteTrustProductEntityAssignmentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
