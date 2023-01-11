import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import api_v2010_account_incoming_phone_number_incoming_phone_number_assigned_add_on_incoming_phone_number_assigned_add_on_extension as shared_api_v2010_account_incoming_phone_number_incoming_phone_number_assigned_add_on_incoming_phone_number_assigned_add_on_extension


LIST_INCOMING_PHONE_NUMBER_ASSIGNED_ADD_ON_EXTENSION_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class ListIncomingPhoneNumberAssignedAddOnExtensionPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    assigned_add_on_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssignedAddOnSid', 'style': 'simple', 'explode': False }})
    resource_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ResourceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListIncomingPhoneNumberAssignedAddOnExtensionQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListIncomingPhoneNumberAssignedAddOnExtensionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListIncomingPhoneNumberAssignedAddOnExtensionListIncomingPhoneNumberAssignedAddOnExtensionResponse:
    end: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    extensions: Optional[list[shared_api_v2010_account_incoming_phone_number_incoming_phone_number_assigned_add_on_incoming_phone_number_assigned_add_on_extension.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extensions') }})
    first_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    next_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclasses.dataclass
class ListIncomingPhoneNumberAssignedAddOnExtensionRequest:
    path_params: ListIncomingPhoneNumberAssignedAddOnExtensionPathParams = dataclasses.field()
    query_params: ListIncomingPhoneNumberAssignedAddOnExtensionQueryParams = dataclasses.field()
    security: ListIncomingPhoneNumberAssignedAddOnExtensionSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListIncomingPhoneNumberAssignedAddOnExtensionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_incoming_phone_number_assigned_add_on_extension_response: Optional[ListIncomingPhoneNumberAssignedAddOnExtensionListIncomingPhoneNumberAssignedAddOnExtensionResponse] = dataclasses.field(default=None)
    
