import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class StoryIDCollaboratorsUseridPermissiontypeGetPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    permissiontype: str = dataclasses.field(metadata={'path_param': { 'field_name': 'permissiontype', 'style': 'simple', 'explode': False }})
    story_collaborator_userid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'story_collaborator_userid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StoryIDCollaboratorsUseridPermissiontypeGetRequest:
    path_params: StoryIDCollaboratorsUseridPermissiontypeGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class StoryIDCollaboratorsUseridPermissiontypeGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    problem_detail: Optional[Any] = dataclasses.field(default=None)
    
