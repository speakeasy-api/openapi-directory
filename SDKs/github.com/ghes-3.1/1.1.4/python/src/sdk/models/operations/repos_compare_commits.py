import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import commit_comparison as shared_commit_comparison


@dataclasses.dataclass
class ReposCompareCommitsPathParams:
    basehead: str = dataclasses.field(metadata={'path_param': { 'field_name': 'basehead', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposCompareCommitsRequest:
    path_params: ReposCompareCommitsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposCompareCommitsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    commit_comparison: Optional[shared_commit_comparison.CommitComparison] = dataclasses.field(default=None)
    
