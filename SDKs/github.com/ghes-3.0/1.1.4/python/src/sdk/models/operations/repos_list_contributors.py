import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import contributor as shared_contributor


@dataclasses.dataclass
class ReposListContributorsPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposListContributorsQueryParams:
    anon: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'anon', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReposListContributorsRequest:
    path_params: ReposListContributorsPathParams = dataclasses.field()
    query_params: ReposListContributorsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposListContributorsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    contributors: Optional[list[shared_contributor.Contributor]] = dataclasses.field(default=None)
    
