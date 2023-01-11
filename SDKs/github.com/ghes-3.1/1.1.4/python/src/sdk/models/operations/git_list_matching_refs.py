import dataclasses
from typing import Optional
from ..shared import git_ref as shared_git_ref


@dataclasses.dataclass
class GitListMatchingRefsPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    ref: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ref', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GitListMatchingRefsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GitListMatchingRefsRequest:
    path_params: GitListMatchingRefsPathParams = dataclasses.field()
    query_params: GitListMatchingRefsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GitListMatchingRefsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    git_refs: Optional[list[shared_git_ref.GitRef]] = dataclasses.field(default=None)
    
