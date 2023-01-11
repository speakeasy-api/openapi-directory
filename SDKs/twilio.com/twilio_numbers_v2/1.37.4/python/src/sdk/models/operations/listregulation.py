import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import regulation_enum_end_user_type_enum as shared_regulation_enum_end_user_type_enum
from ..shared import security as shared_security
from ..shared import numbers_v2_regulatory_compliance_regulation as shared_numbers_v2_regulatory_compliance_regulation


LIST_REGULATION_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclasses.dataclass
class ListRegulationQueryParams:
    end_user_type: Optional[shared_regulation_enum_end_user_type_enum.RegulationEnumEndUserTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'EndUserType', 'style': 'form', 'explode': True }})
    iso_country: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'IsoCountry', 'style': 'form', 'explode': True }})
    number_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NumberType', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListRegulationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListRegulationListRegulationResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListRegulationListRegulationResponse:
    meta: Optional[ListRegulationListRegulationResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    results: Optional[list[shared_numbers_v2_regulatory_compliance_regulation.NumbersV2RegulatoryComplianceRegulation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclasses.dataclass
class ListRegulationRequest:
    query_params: ListRegulationQueryParams = dataclasses.field()
    security: ListRegulationSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListRegulationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_regulation_response: Optional[ListRegulationListRegulationResponse] = dataclasses.field(default=None)
    
