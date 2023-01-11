import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_TRUST_PRODUCT_CHANNEL_ENDPOINT_ASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclasses.dataclass
class DeleteTrustProductChannelEndpointAssignmentPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    trust_product_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TrustProductSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteTrustProductChannelEndpointAssignmentSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteTrustProductChannelEndpointAssignmentRequest:
    path_params: DeleteTrustProductChannelEndpointAssignmentPathParams = dataclasses.field()
    security: DeleteTrustProductChannelEndpointAssignmentSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteTrustProductChannelEndpointAssignmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
