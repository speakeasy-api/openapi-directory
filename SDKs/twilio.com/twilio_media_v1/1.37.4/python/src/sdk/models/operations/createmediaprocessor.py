import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import media_v1_media_processor as shared_media_v1_media_processor


CREATE_MEDIA_PROCESSOR_SERVERS = [
	"https://media.twilio.com",
]

class CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclasses.dataclass
class CreateMediaProcessorCreateMediaProcessorRequest:
    extension: str = dataclasses.field(metadata={'form': { 'field_name': 'Extension' }})
    extension_context: str = dataclasses.field(metadata={'form': { 'field_name': 'ExtensionContext' }})
    extension_environment: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ExtensionEnvironment' }})
    max_duration: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MaxDuration' }})
    status_callback: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    status_callback_method: Optional[CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    

@dataclasses.dataclass
class CreateMediaProcessorSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateMediaProcessorRequest:
    security: CreateMediaProcessorSecurity = dataclasses.field()
    request: Optional[CreateMediaProcessorCreateMediaProcessorRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateMediaProcessorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    media_v1_media_processor: Optional[shared_media_v1_media_processor.MediaV1MediaProcessor] = dataclasses.field(default=None)
    
