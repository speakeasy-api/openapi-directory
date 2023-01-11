import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_incoming_phone_number_incoming_phone_number_assigned_add_on as shared_api_v2010_account_incoming_phone_number_incoming_phone_number_assigned_add_on


CREATE_INCOMING_PHONE_NUMBER_ASSIGNED_ADD_ON_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class CreateIncomingPhoneNumberAssignedAddOnPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    resource_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ResourceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateIncomingPhoneNumberAssignedAddOnCreateIncomingPhoneNumberAssignedAddOnRequest:
    installed_add_on_sid: str = dataclasses.field(metadata={'form': { 'field_name': 'InstalledAddOnSid' }})
    

@dataclasses.dataclass
class CreateIncomingPhoneNumberAssignedAddOnSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateIncomingPhoneNumberAssignedAddOnRequest:
    path_params: CreateIncomingPhoneNumberAssignedAddOnPathParams = dataclasses.field()
    security: CreateIncomingPhoneNumberAssignedAddOnSecurity = dataclasses.field()
    request: Optional[CreateIncomingPhoneNumberAssignedAddOnCreateIncomingPhoneNumberAssignedAddOnRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateIncomingPhoneNumberAssignedAddOnResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_incoming_phone_number_incoming_phone_number_assigned_add_on: Optional[shared_api_v2010_account_incoming_phone_number_incoming_phone_number_assigned_add_on.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn] = dataclasses.field(default=None)
    
