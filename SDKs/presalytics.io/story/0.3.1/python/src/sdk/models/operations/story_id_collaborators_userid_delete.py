import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class StoryIDCollaboratorsUseridDeletePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    story_collaborator_userid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'story_collaborator_userid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StoryIDCollaboratorsUseridDeleteRequest:
    path_params: StoryIDCollaboratorsUseridDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class StoryIDCollaboratorsUseridDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    problem_detail: Optional[Any] = dataclasses.field(default=None)
    
