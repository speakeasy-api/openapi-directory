import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recording_enum_type_enum as shared_recording_enum_type_enum
from ..shared import recording_enum_status_enum as shared_recording_enum_status_enum
from ..shared import security as shared_security
from ..shared import video_v1_recording as shared_video_v1_recording


LIST_RECORDING_SERVERS = [
	"https://video.twilio.com",
]


@dataclasses.dataclass
class ListRecordingQueryParams:
    date_created_after: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DateCreatedAfter', 'style': 'form', 'explode': True }})
    date_created_before: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DateCreatedBefore', 'style': 'form', 'explode': True }})
    grouping_sid: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'GroupingSid', 'style': 'form', 'explode': True }})
    media_type: Optional[shared_recording_enum_type_enum.RecordingEnumTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MediaType', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    source_sid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'SourceSid', 'style': 'form', 'explode': True }})
    status: Optional[shared_recording_enum_status_enum.RecordingEnumStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListRecordingSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListRecordingListRecordingResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListRecordingListRecordingResponse:
    meta: Optional[ListRecordingListRecordingResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    recordings: Optional[list[shared_video_v1_recording.VideoV1Recording]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordings') }})
    

@dataclasses.dataclass
class ListRecordingRequest:
    query_params: ListRecordingQueryParams = dataclasses.field()
    security: ListRecordingSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListRecordingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_recording_response: Optional[ListRecordingListRecordingResponse] = dataclasses.field(default=None)
    
