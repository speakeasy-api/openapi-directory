import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import composition_enum_format_enum as shared_composition_enum_format_enum
from ..shared import security as shared_security
from ..shared import video_v1_composition as shared_video_v1_composition


CREATE_COMPOSITION_SERVERS = [
	"https://video.twilio.com",
]

class CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclasses.dataclass
class CreateCompositionCreateCompositionRequest:
    room_sid: str = dataclasses.field(metadata={'form': { 'field_name': 'RoomSid' }})
    audio_sources: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AudioSources' }})
    audio_sources_excluded: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AudioSourcesExcluded' }})
    format: Optional[shared_composition_enum_format_enum.CompositionEnumFormatEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Format' }})
    resolution: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Resolution' }})
    status_callback: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    status_callback_method: Optional[CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    trim: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Trim' }})
    video_layout: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VideoLayout' }})
    

@dataclasses.dataclass
class CreateCompositionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateCompositionRequest:
    security: CreateCompositionSecurity = dataclasses.field()
    request: Optional[CreateCompositionCreateCompositionRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateCompositionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    video_v1_composition: Optional[shared_video_v1_composition.VideoV1Composition] = dataclasses.field(default=None)
    
