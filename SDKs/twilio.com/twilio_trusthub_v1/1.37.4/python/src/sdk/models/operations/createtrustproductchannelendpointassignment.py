import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import trusthub_v1_trust_product_trust_product_channel_endpoint_assignment as shared_trusthub_v1_trust_product_trust_product_channel_endpoint_assignment


CREATE_TRUST_PRODUCT_CHANNEL_ENDPOINT_ASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclasses.dataclass
class CreateTrustProductChannelEndpointAssignmentPathParams:
    trust_product_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TrustProductSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateTrustProductChannelEndpointAssignmentCreateTrustProductChannelEndpointAssignmentRequest:
    channel_endpoint_sid: str = dataclasses.field(metadata={'form': { 'field_name': 'ChannelEndpointSid' }})
    channel_endpoint_type: str = dataclasses.field(metadata={'form': { 'field_name': 'ChannelEndpointType' }})
    

@dataclasses.dataclass
class CreateTrustProductChannelEndpointAssignmentSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateTrustProductChannelEndpointAssignmentRequest:
    path_params: CreateTrustProductChannelEndpointAssignmentPathParams = dataclasses.field()
    security: CreateTrustProductChannelEndpointAssignmentSecurity = dataclasses.field()
    request: Optional[CreateTrustProductChannelEndpointAssignmentCreateTrustProductChannelEndpointAssignmentRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateTrustProductChannelEndpointAssignmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    trusthub_v1_trust_product_trust_product_channel_endpoint_assignment: Optional[shared_trusthub_v1_trust_product_trust_product_channel_endpoint_assignment.TrusthubV1TrustProductTrustProductChannelEndpointAssignment] = dataclasses.field(default=None)
    
