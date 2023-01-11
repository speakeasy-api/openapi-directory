import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authorization_document_enum_status_enum as shared_authorization_document_enum_status_enum
from ..shared import security as shared_security
from ..shared import preview_hosted_numbers_authorization_document as shared_preview_hosted_numbers_authorization_document


LIST_HOSTED_NUMBERS_AUTHORIZATION_DOCUMENT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class ListHostedNumbersAuthorizationDocumentQueryParams:
    email: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Email', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    status: Optional[shared_authorization_document_enum_status_enum.AuthorizationDocumentEnumStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListHostedNumbersAuthorizationDocumentSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponse:
    items: Optional[list[shared_preview_hosted_numbers_authorization_document.PreviewHostedNumbersAuthorizationDocument]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    meta: Optional[ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListHostedNumbersAuthorizationDocumentRequest:
    query_params: ListHostedNumbersAuthorizationDocumentQueryParams = dataclasses.field()
    security: ListHostedNumbersAuthorizationDocumentSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListHostedNumbersAuthorizationDocumentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_hosted_numbers_authorization_document_response: Optional[ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponse] = dataclasses.field(default=None)
    
