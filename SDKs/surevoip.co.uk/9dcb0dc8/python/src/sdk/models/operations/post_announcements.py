import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import oneannouncements_post_responses_403_content_application_1json_schema as shared_oneannouncements_post_responses_403_content_application_1json_schema


@dataclasses.dataclass
class PostAnnouncementsRequestBody:
    description: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'description' }})
    file: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass_json
@dataclasses.dataclass
class PostAnnouncements201ApplicationJSONAnnouncementURL:
    download: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAnnouncements201ApplicationJSONAnnouncement:
    creation_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creation_date') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    file_internal: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file_internal') }})
    filename: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filename') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    src_ip_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('src_ip_address') }})
    url: Optional[PostAnnouncements201ApplicationJSONAnnouncementURL] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAnnouncements201ApplicationJSON:
    announcement: Optional[PostAnnouncements201ApplicationJSONAnnouncement] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('announcement') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAnnouncements400ApplicationJSONErrors:
    field: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    message: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAnnouncements400ApplicationJSON:
    errors: list[PostAnnouncements400ApplicationJSONErrors] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAnnouncements403ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class PostAnnouncementsRequest:
    request: PostAnnouncementsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostAnnouncementsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_announcements_201_application_json_object: Optional[PostAnnouncements201ApplicationJSON] = dataclasses.field(default=None)
    post_announcements_400_application_json_object: Optional[PostAnnouncements400ApplicationJSON] = dataclasses.field(default=None)
    post_announcements_403_application_json_object: Optional[PostAnnouncements403ApplicationJSON] = dataclasses.field(default=None)
    oneannouncements_post_responses_403_content_application_1json_schema: Optional[shared_oneannouncements_post_responses_403_content_application_1json_schema.OneannouncementsPostResponses403ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
