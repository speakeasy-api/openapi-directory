import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import status as shared_status


@dataclasses.dataclass
class ReposListCommitStatusesForRefPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    ref: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ref', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposListCommitStatusesForRefQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReposListCommitStatusesForRefRequest:
    path_params: ReposListCommitStatusesForRefPathParams = dataclasses.field()
    query_params: ReposListCommitStatusesForRefQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposListCommitStatusesForRefResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    statuses: Optional[list[shared_status.Status]] = dataclasses.field(default=None)
    
