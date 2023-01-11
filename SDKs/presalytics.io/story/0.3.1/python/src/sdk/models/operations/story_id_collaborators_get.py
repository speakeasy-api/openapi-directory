import dataclasses
from typing import Any,Optional
from ..shared import story_collaborator as shared_story_collaborator


@dataclasses.dataclass
class StoryIDCollaboratorsGetPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StoryIDCollaboratorsGetRequest:
    path_params: StoryIDCollaboratorsGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class StoryIDCollaboratorsGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    problem_detail: Optional[Any] = dataclasses.field(default=None)
    story_collaborators: Optional[list[shared_story_collaborator.StoryCollaborator]] = dataclasses.field(default=None)
    
