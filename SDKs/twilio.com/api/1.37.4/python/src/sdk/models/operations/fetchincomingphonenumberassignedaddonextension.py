import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_incoming_phone_number_incoming_phone_number_assigned_add_on_incoming_phone_number_assigned_add_on_extension as shared_api_v2010_account_incoming_phone_number_incoming_phone_number_assigned_add_on_incoming_phone_number_assigned_add_on_extension


FETCH_INCOMING_PHONE_NUMBER_ASSIGNED_ADD_ON_EXTENSION_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    assigned_add_on_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssignedAddOnSid', 'style': 'simple', 'explode': False }})
    resource_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ResourceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchIncomingPhoneNumberAssignedAddOnExtensionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchIncomingPhoneNumberAssignedAddOnExtensionRequest:
    path_params: FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams = dataclasses.field()
    security: FetchIncomingPhoneNumberAssignedAddOnExtensionSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchIncomingPhoneNumberAssignedAddOnExtensionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_incoming_phone_number_incoming_phone_number_assigned_add_on_incoming_phone_number_assigned_add_on_extension: Optional[shared_api_v2010_account_incoming_phone_number_incoming_phone_number_assigned_add_on_incoming_phone_number_assigned_add_on_extension.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension] = dataclasses.field(default=None)
    
