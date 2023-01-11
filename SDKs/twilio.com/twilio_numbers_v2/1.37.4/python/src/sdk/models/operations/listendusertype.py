import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import numbers_v2_regulatory_compliance_end_user_type as shared_numbers_v2_regulatory_compliance_end_user_type


LIST_END_USER_TYPE_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclasses.dataclass
class ListEndUserTypeQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListEndUserTypeSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListEndUserTypeListEndUserTypeResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListEndUserTypeListEndUserTypeResponse:
    end_user_types: Optional[list[shared_numbers_v2_regulatory_compliance_end_user_type.NumbersV2RegulatoryComplianceEndUserType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_user_types') }})
    meta: Optional[ListEndUserTypeListEndUserTypeResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListEndUserTypeRequest:
    query_params: ListEndUserTypeQueryParams = dataclasses.field()
    security: ListEndUserTypeSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListEndUserTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_end_user_type_response: Optional[ListEndUserTypeListEndUserTypeResponse] = dataclasses.field(default=None)
    
