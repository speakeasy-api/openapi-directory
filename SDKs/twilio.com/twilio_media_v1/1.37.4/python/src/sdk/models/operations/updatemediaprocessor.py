import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import media_processor_enum_update_status_enum as shared_media_processor_enum_update_status_enum
from ..shared import security as shared_security
from ..shared import media_v1_media_processor as shared_media_v1_media_processor


UPDATE_MEDIA_PROCESSOR_SERVERS = [
	"https://media.twilio.com",
]


@dataclasses.dataclass
class UpdateMediaProcessorPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateMediaProcessorUpdateMediaProcessorRequest:
    status: shared_media_processor_enum_update_status_enum.MediaProcessorEnumUpdateStatusEnum = dataclasses.field(metadata={'form': { 'field_name': 'Status' }})
    

@dataclasses.dataclass
class UpdateMediaProcessorSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateMediaProcessorRequest:
    path_params: UpdateMediaProcessorPathParams = dataclasses.field()
    security: UpdateMediaProcessorSecurity = dataclasses.field()
    request: Optional[UpdateMediaProcessorUpdateMediaProcessorRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateMediaProcessorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    media_v1_media_processor: Optional[shared_media_v1_media_processor.MediaV1MediaProcessor] = dataclasses.field(default=None)
    
