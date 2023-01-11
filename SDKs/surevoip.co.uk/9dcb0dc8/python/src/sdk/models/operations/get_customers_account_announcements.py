import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import oneannouncements_post_responses_201_content_application_1json_schema as shared_oneannouncements_post_responses_201_content_application_1json_schema
from ..shared import oneannouncements_post_responses_403_content_application_1json_schema as shared_oneannouncements_post_responses_403_content_application_1json_schema


@dataclasses.dataclass
class GetCustomersAccountAnnouncementsPathParams:
    account: int = dataclasses.field(metadata={'path_param': { 'field_name': 'account', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetCustomersAccountAnnouncements200ApplicationJSON:
    list: Optional[list[shared_oneannouncements_post_responses_201_content_application_1json_schema.OneannouncementsPostResponses201ContentApplication1jsonSchema]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('list') }})
    

@dataclasses.dataclass
class GetCustomersAccountAnnouncementsRequest:
    path_params: GetCustomersAccountAnnouncementsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCustomersAccountAnnouncementsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_customers_account_announcements_200_application_json_object: Optional[GetCustomersAccountAnnouncements200ApplicationJSON] = dataclasses.field(default=None)
    oneannouncements_post_responses_403_content_application_1json_schema: Optional[shared_oneannouncements_post_responses_403_content_application_1json_schema.OneannouncementsPostResponses403ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
