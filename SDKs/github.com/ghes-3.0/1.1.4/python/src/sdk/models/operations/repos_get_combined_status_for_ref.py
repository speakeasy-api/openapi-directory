import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import combined_commit_status as shared_combined_commit_status


@dataclasses.dataclass
class ReposGetCombinedStatusForRefPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    ref: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ref', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposGetCombinedStatusForRefQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReposGetCombinedStatusForRefRequest:
    path_params: ReposGetCombinedStatusForRefPathParams = dataclasses.field()
    query_params: ReposGetCombinedStatusForRefQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposGetCombinedStatusForRefResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    combined_commit_status: Optional[shared_combined_commit_status.CombinedCommitStatus] = dataclasses.field(default=None)
    
