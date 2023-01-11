import dataclasses
from typing import Any,Optional
from ..shared import manage_event as shared_manage_event


@dataclasses.dataclass
class StoryIDEventsPostPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StoryIDEventsPostRequest:
    path_params: StoryIDEventsPostPathParams = dataclasses.field()
    request: shared_manage_event.ManageEvent = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class StoryIDEventsPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    problem_detail: Optional[Any] = dataclasses.field(default=None)
    story_id_events_post_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
