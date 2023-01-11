import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import minimal_repository as shared_minimal_repository


@dataclasses.dataclass
class ActivityListWatchedReposForAuthenticatedUserQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ActivityListWatchedReposForAuthenticatedUserRequest:
    query_params: ActivityListWatchedReposForAuthenticatedUserQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ActivityListWatchedReposForAuthenticatedUserResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    minimal_repositories: Optional[list[shared_minimal_repository.MinimalRepository]] = dataclasses.field(default=None)
    
