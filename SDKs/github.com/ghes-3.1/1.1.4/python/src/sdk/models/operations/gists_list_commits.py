import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import gist_commit as shared_gist_commit


@dataclasses.dataclass
class GistsListCommitsPathParams:
    gist_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'gist_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GistsListCommitsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GistsListCommitsRequest:
    path_params: GistsListCommitsPathParams = dataclasses.field()
    query_params: GistsListCommitsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GistsListCommitsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    gist_commits: Optional[list[shared_gist_commit.GistCommit]] = dataclasses.field(default=None)
    
