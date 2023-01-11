import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import composition_enum_status_enum as shared_composition_enum_status_enum
from ..shared import security as shared_security
from ..shared import video_v1_composition as shared_video_v1_composition


LIST_COMPOSITION_SERVERS = [
	"https://video.twilio.com",
]


@dataclasses.dataclass
class ListCompositionQueryParams:
    date_created_after: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DateCreatedAfter', 'style': 'form', 'explode': True }})
    date_created_before: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DateCreatedBefore', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    room_sid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'RoomSid', 'style': 'form', 'explode': True }})
    status: Optional[shared_composition_enum_status_enum.CompositionEnumStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListCompositionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListCompositionListCompositionResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListCompositionListCompositionResponse:
    compositions: Optional[list[shared_video_v1_composition.VideoV1Composition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compositions') }})
    meta: Optional[ListCompositionListCompositionResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListCompositionRequest:
    query_params: ListCompositionQueryParams = dataclasses.field()
    security: ListCompositionSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListCompositionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_composition_response: Optional[ListCompositionListCompositionResponse] = dataclasses.field(default=None)
    
