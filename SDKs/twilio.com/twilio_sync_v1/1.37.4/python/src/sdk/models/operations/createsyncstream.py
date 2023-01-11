import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import sync_v1_service_sync_stream as shared_sync_v1_service_sync_stream


CREATE_SYNC_STREAM_SERVERS = [
	"https://sync.twilio.com",
]


@dataclasses.dataclass
class CreateSyncStreamPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateSyncStreamCreateSyncStreamRequest:
    ttl: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Ttl' }})
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclasses.dataclass
class CreateSyncStreamSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateSyncStreamRequest:
    path_params: CreateSyncStreamPathParams = dataclasses.field()
    security: CreateSyncStreamSecurity = dataclasses.field()
    request: Optional[CreateSyncStreamCreateSyncStreamRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateSyncStreamResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sync_v1_service_sync_stream: Optional[shared_sync_v1_service_sync_stream.SyncV1ServiceSyncStream] = dataclasses.field(default=None)
    
