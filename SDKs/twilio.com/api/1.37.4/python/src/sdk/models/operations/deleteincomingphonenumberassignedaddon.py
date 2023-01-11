import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_INCOMING_PHONE_NUMBER_ASSIGNED_ADD_ON_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class DeleteIncomingPhoneNumberAssignedAddOnPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    resource_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ResourceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteIncomingPhoneNumberAssignedAddOnSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteIncomingPhoneNumberAssignedAddOnRequest:
    path_params: DeleteIncomingPhoneNumberAssignedAddOnPathParams = dataclasses.field()
    security: DeleteIncomingPhoneNumberAssignedAddOnSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteIncomingPhoneNumberAssignedAddOnResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
