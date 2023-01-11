import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import sync_v1_service_sync_stream_stream_message as shared_sync_v1_service_sync_stream_stream_message


CREATE_STREAM_MESSAGE_SERVERS = [
	"https://sync.twilio.com",
]


@dataclasses.dataclass
class CreateStreamMessagePathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    stream_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'StreamSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateStreamMessageCreateStreamMessageRequest:
    data: Any = dataclasses.field(metadata={'form': { 'field_name': 'Data' }})
    

@dataclasses.dataclass
class CreateStreamMessageSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateStreamMessageRequest:
    path_params: CreateStreamMessagePathParams = dataclasses.field()
    security: CreateStreamMessageSecurity = dataclasses.field()
    request: Optional[CreateStreamMessageCreateStreamMessageRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateStreamMessageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sync_v1_service_sync_stream_stream_message: Optional[shared_sync_v1_service_sync_stream_stream_message.SyncV1ServiceSyncStreamStreamMessage] = dataclasses.field(default=None)
    
