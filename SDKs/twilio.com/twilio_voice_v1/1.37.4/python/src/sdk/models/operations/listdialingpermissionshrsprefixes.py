import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import voice_v1_dialing_permissions_dialing_permissions_country_dialing_permissions_hrs_prefixes as shared_voice_v1_dialing_permissions_dialing_permissions_country_dialing_permissions_hrs_prefixes


LIST_DIALING_PERMISSIONS_HRS_PREFIXES_SERVERS = [
	"https://voice.twilio.com",
]


@dataclasses.dataclass
class ListDialingPermissionsHrsPrefixesPathParams:
    iso_code: str = dataclasses.field(metadata={'path_param': { 'field_name': 'IsoCode', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListDialingPermissionsHrsPrefixesQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListDialingPermissionsHrsPrefixesSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse:
    content: Optional[list[shared_voice_v1_dialing_permissions_dialing_permissions_country_dialing_permissions_hrs_prefixes.VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    meta: Optional[ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListDialingPermissionsHrsPrefixesRequest:
    path_params: ListDialingPermissionsHrsPrefixesPathParams = dataclasses.field()
    query_params: ListDialingPermissionsHrsPrefixesQueryParams = dataclasses.field()
    security: ListDialingPermissionsHrsPrefixesSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListDialingPermissionsHrsPrefixesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_dialing_permissions_hrs_prefixes_response: Optional[ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse] = dataclasses.field(default=None)
    
