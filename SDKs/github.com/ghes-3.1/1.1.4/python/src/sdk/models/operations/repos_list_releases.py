import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import release as shared_release


@dataclasses.dataclass
class ReposListReleasesPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposListReleasesQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReposListReleasesRequest:
    path_params: ReposListReleasesPathParams = dataclasses.field()
    query_params: ReposListReleasesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposListReleasesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    releases: Optional[list[shared_release.Release]] = dataclasses.field(default=None)
    
