import dataclasses
from typing import Any,Optional
from ..shared import story_collaborator as shared_story_collaborator


@dataclasses.dataclass
class StoryIDCollaboratorsUseridPutPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    story_collaborator_userid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'story_collaborator_userid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StoryIDCollaboratorsUseridPutRequest:
    path_params: StoryIDCollaboratorsUseridPutPathParams = dataclasses.field()
    request: shared_story_collaborator.StoryCollaborator = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class StoryIDCollaboratorsUseridPutResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    problem_detail: Optional[Any] = dataclasses.field(default=None)
    story_collaborator: Optional[shared_story_collaborator.StoryCollaborator] = dataclasses.field(default=None)
    
