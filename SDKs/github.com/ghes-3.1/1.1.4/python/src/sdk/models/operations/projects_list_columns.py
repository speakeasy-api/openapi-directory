import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import project_column as shared_project_column


@dataclasses.dataclass
class ProjectsListColumnsPathParams:
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProjectsListColumnsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ProjectsListColumnsRequest:
    path_params: ProjectsListColumnsPathParams = dataclasses.field()
    query_params: ProjectsListColumnsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ProjectsListColumnsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    project_columns: Optional[list[shared_project_column.ProjectColumn]] = dataclasses.field(default=None)
    
