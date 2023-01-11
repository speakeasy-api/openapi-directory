import dataclasses
from typing import Optional
from enum import Enum
from ..shared import error as shared_error
from ..shared import project as shared_project


@dataclasses.dataclass
class GetProjectPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetProjectWithEnum(str, Enum):
    CLIENT = "client"
    VENDOR = "vendor"
    SCORE = "score"


@dataclasses.dataclass
class GetProjectQueryParams:
    with_: Optional[list[GetProjectWithEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'with[]', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetProjectRequest:
    path_params: GetProjectPathParams = dataclasses.field()
    query_params: GetProjectQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    project: Optional[shared_project.Project] = dataclasses.field(default=None)
    
