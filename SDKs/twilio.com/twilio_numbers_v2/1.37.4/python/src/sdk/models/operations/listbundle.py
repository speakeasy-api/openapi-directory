import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bundle_enum_sort_by_enum as shared_bundle_enum_sort_by_enum
from ..shared import bundle_enum_sort_direction_enum as shared_bundle_enum_sort_direction_enum
from ..shared import bundle_enum_status_enum as shared_bundle_enum_status_enum
from ..shared import security as shared_security
from ..shared import numbers_v2_regulatory_compliance_bundle as shared_numbers_v2_regulatory_compliance_bundle


LIST_BUNDLE_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclasses.dataclass
class ListBundleQueryParams:
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'FriendlyName', 'style': 'form', 'explode': True }})
    has_valid_until_date: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'HasValidUntilDate', 'style': 'form', 'explode': True }})
    iso_country: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'IsoCountry', 'style': 'form', 'explode': True }})
    number_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NumberType', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    regulation_sid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'RegulationSid', 'style': 'form', 'explode': True }})
    sort_by: Optional[shared_bundle_enum_sort_by_enum.BundleEnumSortByEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'SortBy', 'style': 'form', 'explode': True }})
    sort_direction: Optional[shared_bundle_enum_sort_direction_enum.BundleEnumSortDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'SortDirection', 'style': 'form', 'explode': True }})
    status: Optional[shared_bundle_enum_status_enum.BundleEnumStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    valid_until_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ValidUntilDate', 'style': 'form', 'explode': True }})
    valid_until_date_less_than_: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ValidUntilDate<', 'style': 'form', 'explode': True }})
    valid_until_date_greater_than_: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ValidUntilDate>', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListBundleSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListBundleListBundleResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListBundleListBundleResponse:
    meta: Optional[ListBundleListBundleResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    results: Optional[list[shared_numbers_v2_regulatory_compliance_bundle.NumbersV2RegulatoryComplianceBundle]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclasses.dataclass
class ListBundleRequest:
    query_params: ListBundleQueryParams = dataclasses.field()
    security: ListBundleSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListBundleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_bundle_response: Optional[ListBundleListBundleResponse] = dataclasses.field(default=None)
    
