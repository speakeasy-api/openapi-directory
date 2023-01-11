import dataclasses
from typing import Any,Optional
from ..shared import story_collaborator as shared_story_collaborator


@dataclasses.dataclass
class StoryIDCollaboratorsInactivePostPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StoryIDCollaboratorsInactivePostRequest:
    path_params: StoryIDCollaboratorsInactivePostPathParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class StoryIDCollaboratorsInactivePostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    problem_detail: Optional[Any] = dataclasses.field(default=None)
    story_collaborator: Optional[shared_story_collaborator.StoryCollaborator] = dataclasses.field(default=None)
    
