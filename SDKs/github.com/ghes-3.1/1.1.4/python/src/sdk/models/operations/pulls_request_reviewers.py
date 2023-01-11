import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import pull_request_simple as shared_pull_request_simple


@dataclasses.dataclass
class PullsRequestReviewersPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    pull_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'pull_number', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PullsRequestReviewersRequestBody:
    reviewers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviewers') }})
    team_reviewers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team_reviewers') }})
    

@dataclasses.dataclass
class PullsRequestReviewersRequest:
    path_params: PullsRequestReviewersPathParams = dataclasses.field()
    request: Optional[PullsRequestReviewersRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PullsRequestReviewersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    pull_request_simple: Optional[shared_pull_request_simple.PullRequestSimple] = dataclasses.field(default=None)
    
