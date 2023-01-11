import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import oneannouncements_post_responses_201_content_application_1json_schema as shared_oneannouncements_post_responses_201_content_application_1json_schema


@dataclasses.dataclass
class GetCustomersAccountAnnouncementsAnnouncementIDPathParams:
    account: int = dataclasses.field(metadata={'path_param': { 'field_name': 'account', 'style': 'simple', 'explode': False }})
    announcement_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'announcement_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetCustomersAccountAnnouncementsAnnouncementID404ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

@dataclasses.dataclass
class GetCustomersAccountAnnouncementsAnnouncementIDRequest:
    path_params: GetCustomersAccountAnnouncementsAnnouncementIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCustomersAccountAnnouncementsAnnouncementIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_customers_account_announcements_announcement_id_404_application_json_object: Optional[GetCustomersAccountAnnouncementsAnnouncementID404ApplicationJSON] = dataclasses.field(default=None)
    oneannouncements_post_responses_201_content_application_1json_schema: Optional[shared_oneannouncements_post_responses_201_content_application_1json_schema.OneannouncementsPostResponses201ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
