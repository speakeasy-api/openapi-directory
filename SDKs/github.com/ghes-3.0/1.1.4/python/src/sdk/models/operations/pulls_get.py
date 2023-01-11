import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import pull_request as shared_pull_request


@dataclasses.dataclass
class PullsGetPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    pull_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'pull_number', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PullsGetRequest:
    path_params: PullsGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PullsGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    pull_request: Optional[shared_pull_request.PullRequest] = dataclasses.field(default=None)
    
