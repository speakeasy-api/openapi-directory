import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_CUSTOMER_PROFILE_ENTITY_ASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclasses.dataclass
class DeleteCustomerProfileEntityAssignmentPathParams:
    customer_profile_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CustomerProfileSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteCustomerProfileEntityAssignmentSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteCustomerProfileEntityAssignmentRequest:
    path_params: DeleteCustomerProfileEntityAssignmentPathParams = dataclasses.field()
    security: DeleteCustomerProfileEntityAssignmentSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteCustomerProfileEntityAssignmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
