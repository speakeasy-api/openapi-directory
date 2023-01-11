import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import project_id_enum as shared_project_id_enum
from ..shared import basic_error as shared_basic_error
from ..shared import simple_user as shared_simple_user
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class ProjectsListCollaboratorsPathParams:
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProjectsListCollaboratorsQueryParams:
    affiliation: Optional[shared_project_id_enum.ProjectIDEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'affiliation', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ProjectsListCollaborators415ApplicationJSON:
    documentation_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class ProjectsListCollaboratorsRequest:
    path_params: ProjectsListCollaboratorsPathParams = dataclasses.field()
    query_params: ProjectsListCollaboratorsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ProjectsListCollaboratorsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    projects_list_collaborators_415_application_json_object: Optional[ProjectsListCollaborators415ApplicationJSON] = dataclasses.field(default=None)
    simple_users: Optional[list[shared_simple_user.SimpleUser]] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
