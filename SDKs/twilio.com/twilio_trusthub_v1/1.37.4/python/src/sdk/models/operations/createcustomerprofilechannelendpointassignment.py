import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import trusthub_v1_customer_profile_customer_profile_channel_endpoint_assignment as shared_trusthub_v1_customer_profile_customer_profile_channel_endpoint_assignment


CREATE_CUSTOMER_PROFILE_CHANNEL_ENDPOINT_ASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclasses.dataclass
class CreateCustomerProfileChannelEndpointAssignmentPathParams:
    customer_profile_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CustomerProfileSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateCustomerProfileChannelEndpointAssignmentCreateCustomerProfileChannelEndpointAssignmentRequest:
    channel_endpoint_sid: str = dataclasses.field(metadata={'form': { 'field_name': 'ChannelEndpointSid' }})
    channel_endpoint_type: str = dataclasses.field(metadata={'form': { 'field_name': 'ChannelEndpointType' }})
    

@dataclasses.dataclass
class CreateCustomerProfileChannelEndpointAssignmentSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateCustomerProfileChannelEndpointAssignmentRequest:
    path_params: CreateCustomerProfileChannelEndpointAssignmentPathParams = dataclasses.field()
    security: CreateCustomerProfileChannelEndpointAssignmentSecurity = dataclasses.field()
    request: Optional[CreateCustomerProfileChannelEndpointAssignmentCreateCustomerProfileChannelEndpointAssignmentRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateCustomerProfileChannelEndpointAssignmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    trusthub_v1_customer_profile_customer_profile_channel_endpoint_assignment: Optional[shared_trusthub_v1_customer_profile_customer_profile_channel_endpoint_assignment.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment] = dataclasses.field(default=None)
    
