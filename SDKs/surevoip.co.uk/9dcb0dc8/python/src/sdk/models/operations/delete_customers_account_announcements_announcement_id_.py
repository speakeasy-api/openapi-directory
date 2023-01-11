import dataclasses
from typing import Optional
from ..shared import oneannouncements_post_responses_403_content_application_1json_schema as shared_oneannouncements_post_responses_403_content_application_1json_schema


@dataclasses.dataclass
class DeleteCustomersAccountAnnouncementsAnnouncementIDPathParams:
    account: int = dataclasses.field(metadata={'path_param': { 'field_name': 'account', 'style': 'simple', 'explode': False }})
    announcement_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'announcement_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteCustomersAccountAnnouncementsAnnouncementIDRequest:
    path_params: DeleteCustomersAccountAnnouncementsAnnouncementIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteCustomersAccountAnnouncementsAnnouncementIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    oneannouncements_post_responses_403_content_application_1json_schema: Optional[shared_oneannouncements_post_responses_403_content_application_1json_schema.OneannouncementsPostResponses403ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
