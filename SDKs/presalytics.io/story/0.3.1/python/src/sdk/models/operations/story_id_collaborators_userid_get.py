import dataclasses
from typing import Any,Optional
from ..shared import story_collaborator as shared_story_collaborator


@dataclasses.dataclass
class StoryIDCollaboratorsUseridGetPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    story_collaborator_userid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'story_collaborator_userid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StoryIDCollaboratorsUseridGetRequest:
    path_params: StoryIDCollaboratorsUseridGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class StoryIDCollaboratorsUseridGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    problem_detail: Optional[Any] = dataclasses.field(default=None)
    story_collaborator: Optional[shared_story_collaborator.StoryCollaborator] = dataclasses.field(default=None)
    
