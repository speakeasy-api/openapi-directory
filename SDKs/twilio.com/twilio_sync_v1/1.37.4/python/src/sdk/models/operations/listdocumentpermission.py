import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import sync_v1_service_document_document_permission as shared_sync_v1_service_document_document_permission


LIST_DOCUMENT_PERMISSION_SERVERS = [
	"https://sync.twilio.com",
]


@dataclasses.dataclass
class ListDocumentPermissionPathParams:
    document_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'DocumentSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListDocumentPermissionQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListDocumentPermissionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListDocumentPermissionListDocumentPermissionResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDocumentPermissionListDocumentPermissionResponse:
    meta: Optional[ListDocumentPermissionListDocumentPermissionResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    permissions: Optional[list[shared_sync_v1_service_document_document_permission.SyncV1ServiceDocumentDocumentPermission]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    

@dataclasses.dataclass
class ListDocumentPermissionRequest:
    path_params: ListDocumentPermissionPathParams = dataclasses.field()
    query_params: ListDocumentPermissionQueryParams = dataclasses.field()
    security: ListDocumentPermissionSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListDocumentPermissionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_document_permission_response: Optional[ListDocumentPermissionListDocumentPermissionResponse] = dataclasses.field(default=None)
    
