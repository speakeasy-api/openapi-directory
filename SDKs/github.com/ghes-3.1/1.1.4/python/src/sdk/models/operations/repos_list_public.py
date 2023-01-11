import dataclasses
from typing import Optional
from enum import Enum
from ..shared import since_repo_enum as shared_since_repo_enum
from ..shared import minimal_repository as shared_minimal_repository
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class ReposListPublicQueryParams:
    since: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    visibility: Optional[shared_since_repo_enum.SinceRepoEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'visibility', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReposListPublicRequest:
    query_params: ReposListPublicQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposListPublicResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    minimal_repositories: Optional[list[shared_minimal_repository.MinimalRepository]] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
