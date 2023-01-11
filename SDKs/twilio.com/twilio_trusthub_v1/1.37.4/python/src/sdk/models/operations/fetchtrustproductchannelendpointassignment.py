import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import trusthub_v1_trust_product_trust_product_channel_endpoint_assignment as shared_trusthub_v1_trust_product_trust_product_channel_endpoint_assignment


FETCH_TRUST_PRODUCT_CHANNEL_ENDPOINT_ASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclasses.dataclass
class FetchTrustProductChannelEndpointAssignmentPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    trust_product_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TrustProductSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchTrustProductChannelEndpointAssignmentSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchTrustProductChannelEndpointAssignmentRequest:
    path_params: FetchTrustProductChannelEndpointAssignmentPathParams = dataclasses.field()
    security: FetchTrustProductChannelEndpointAssignmentSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchTrustProductChannelEndpointAssignmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    trusthub_v1_trust_product_trust_product_channel_endpoint_assignment: Optional[shared_trusthub_v1_trust_product_trust_product_channel_endpoint_assignment.TrusthubV1TrustProductTrustProductChannelEndpointAssignment] = dataclasses.field(default=None)
    
