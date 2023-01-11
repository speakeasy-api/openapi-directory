import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import sync_v1_service_sync_stream as shared_sync_v1_service_sync_stream


LIST_SYNC_STREAM_SERVERS = [
	"https://sync.twilio.com",
]


@dataclasses.dataclass
class ListSyncStreamPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListSyncStreamQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListSyncStreamSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListSyncStreamListSyncStreamResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListSyncStreamListSyncStreamResponse:
    meta: Optional[ListSyncStreamListSyncStreamResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    streams: Optional[list[shared_sync_v1_service_sync_stream.SyncV1ServiceSyncStream]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streams') }})
    

@dataclasses.dataclass
class ListSyncStreamRequest:
    path_params: ListSyncStreamPathParams = dataclasses.field()
    query_params: ListSyncStreamQueryParams = dataclasses.field()
    security: ListSyncStreamSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListSyncStreamResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_sync_stream_response: Optional[ListSyncStreamListSyncStreamResponse] = dataclasses.field(default=None)
    
