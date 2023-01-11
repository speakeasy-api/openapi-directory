import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import numbers_v2_regulatory_compliance_supporting_document_type as shared_numbers_v2_regulatory_compliance_supporting_document_type


LIST_SUPPORTING_DOCUMENT_TYPE_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclasses.dataclass
class ListSupportingDocumentTypeQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListSupportingDocumentTypeSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListSupportingDocumentTypeListSupportingDocumentTypeResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListSupportingDocumentTypeListSupportingDocumentTypeResponse:
    meta: Optional[ListSupportingDocumentTypeListSupportingDocumentTypeResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    supporting_document_types: Optional[list[shared_numbers_v2_regulatory_compliance_supporting_document_type.NumbersV2RegulatoryComplianceSupportingDocumentType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supporting_document_types') }})
    

@dataclasses.dataclass
class ListSupportingDocumentTypeRequest:
    query_params: ListSupportingDocumentTypeQueryParams = dataclasses.field()
    security: ListSupportingDocumentTypeSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListSupportingDocumentTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_supporting_document_type_response: Optional[ListSupportingDocumentTypeListSupportingDocumentTypeResponse] = dataclasses.field(default=None)
    
