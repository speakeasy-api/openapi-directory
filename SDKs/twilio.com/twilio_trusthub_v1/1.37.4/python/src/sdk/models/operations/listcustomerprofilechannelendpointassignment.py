import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import trusthub_v1_customer_profile_customer_profile_channel_endpoint_assignment as shared_trusthub_v1_customer_profile_customer_profile_channel_endpoint_assignment


LIST_CUSTOMER_PROFILE_CHANNEL_ENDPOINT_ASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclasses.dataclass
class ListCustomerProfileChannelEndpointAssignmentPathParams:
    customer_profile_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CustomerProfileSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListCustomerProfileChannelEndpointAssignmentQueryParams:
    channel_endpoint_sid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ChannelEndpointSid', 'style': 'form', 'explode': True }})
    channel_endpoint_sids: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ChannelEndpointSids', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListCustomerProfileChannelEndpointAssignmentSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListCustomerProfileChannelEndpointAssignmentListCustomerProfileChannelEndpointAssignmentResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListCustomerProfileChannelEndpointAssignmentListCustomerProfileChannelEndpointAssignmentResponse:
    meta: Optional[ListCustomerProfileChannelEndpointAssignmentListCustomerProfileChannelEndpointAssignmentResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    results: Optional[list[shared_trusthub_v1_customer_profile_customer_profile_channel_endpoint_assignment.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclasses.dataclass
class ListCustomerProfileChannelEndpointAssignmentRequest:
    path_params: ListCustomerProfileChannelEndpointAssignmentPathParams = dataclasses.field()
    query_params: ListCustomerProfileChannelEndpointAssignmentQueryParams = dataclasses.field()
    security: ListCustomerProfileChannelEndpointAssignmentSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListCustomerProfileChannelEndpointAssignmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_customer_profile_channel_endpoint_assignment_response: Optional[ListCustomerProfileChannelEndpointAssignmentListCustomerProfileChannelEndpointAssignmentResponse] = dataclasses.field(default=None)
    
