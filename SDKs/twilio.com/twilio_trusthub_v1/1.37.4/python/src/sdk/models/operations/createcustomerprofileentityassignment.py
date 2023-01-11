import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import trusthub_v1_customer_profile_customer_profile_entity_assignment as shared_trusthub_v1_customer_profile_customer_profile_entity_assignment


CREATE_CUSTOMER_PROFILE_ENTITY_ASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclasses.dataclass
class CreateCustomerProfileEntityAssignmentPathParams:
    customer_profile_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CustomerProfileSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateCustomerProfileEntityAssignmentCreateCustomerProfileEntityAssignmentRequest:
    object_sid: str = dataclasses.field(metadata={'form': { 'field_name': 'ObjectSid' }})
    

@dataclasses.dataclass
class CreateCustomerProfileEntityAssignmentSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateCustomerProfileEntityAssignmentRequest:
    path_params: CreateCustomerProfileEntityAssignmentPathParams = dataclasses.field()
    security: CreateCustomerProfileEntityAssignmentSecurity = dataclasses.field()
    request: Optional[CreateCustomerProfileEntityAssignmentCreateCustomerProfileEntityAssignmentRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateCustomerProfileEntityAssignmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    trusthub_v1_customer_profile_customer_profile_entity_assignment: Optional[shared_trusthub_v1_customer_profile_customer_profile_entity_assignment.TrusthubV1CustomerProfileCustomerProfileEntityAssignment] = dataclasses.field(default=None)
    
