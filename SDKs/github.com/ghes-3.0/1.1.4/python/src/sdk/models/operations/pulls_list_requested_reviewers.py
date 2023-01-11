import dataclasses
from typing import Optional
from ..shared import pull_request_review_request as shared_pull_request_review_request


@dataclasses.dataclass
class PullsListRequestedReviewersPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    pull_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'pull_number', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PullsListRequestedReviewersQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PullsListRequestedReviewersRequest:
    path_params: PullsListRequestedReviewersPathParams = dataclasses.field()
    query_params: PullsListRequestedReviewersQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PullsListRequestedReviewersResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    pull_request_review_request: Optional[shared_pull_request_review_request.PullRequestReviewRequest] = dataclasses.field(default=None)
    
