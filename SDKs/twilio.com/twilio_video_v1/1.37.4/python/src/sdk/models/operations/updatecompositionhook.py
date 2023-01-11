import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import composition_hook_enum_format_enum as shared_composition_hook_enum_format_enum
from ..shared import security as shared_security
from ..shared import video_v1_composition_hook as shared_video_v1_composition_hook


UPDATE_COMPOSITION_HOOK_SERVERS = [
	"https://video.twilio.com",
]


@dataclasses.dataclass
class UpdateCompositionHookPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    
class UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclasses.dataclass
class UpdateCompositionHookUpdateCompositionHookRequest:
    friendly_name: str = dataclasses.field(metadata={'form': { 'field_name': 'FriendlyName' }})
    audio_sources: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AudioSources' }})
    audio_sources_excluded: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AudioSourcesExcluded' }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Enabled' }})
    format: Optional[shared_composition_hook_enum_format_enum.CompositionHookEnumFormatEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Format' }})
    resolution: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Resolution' }})
    status_callback: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    status_callback_method: Optional[UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    trim: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Trim' }})
    video_layout: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VideoLayout' }})
    

@dataclasses.dataclass
class UpdateCompositionHookSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateCompositionHookRequest:
    path_params: UpdateCompositionHookPathParams = dataclasses.field()
    security: UpdateCompositionHookSecurity = dataclasses.field()
    request: Optional[UpdateCompositionHookUpdateCompositionHookRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateCompositionHookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    video_v1_composition_hook: Optional[shared_video_v1_composition_hook.VideoV1CompositionHook] = dataclasses.field(default=None)
    
