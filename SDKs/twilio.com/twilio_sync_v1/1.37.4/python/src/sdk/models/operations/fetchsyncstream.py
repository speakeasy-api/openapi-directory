import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import sync_v1_service_sync_stream as shared_sync_v1_service_sync_stream


FETCH_SYNC_STREAM_SERVERS = [
	"https://sync.twilio.com",
]


@dataclasses.dataclass
class FetchSyncStreamPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchSyncStreamSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchSyncStreamRequest:
    path_params: FetchSyncStreamPathParams = dataclasses.field()
    security: FetchSyncStreamSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchSyncStreamResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sync_v1_service_sync_stream: Optional[shared_sync_v1_service_sync_stream.SyncV1ServiceSyncStream] = dataclasses.field(default=None)
    
