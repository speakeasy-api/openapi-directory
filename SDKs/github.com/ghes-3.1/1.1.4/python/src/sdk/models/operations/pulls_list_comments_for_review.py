import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import review_comment as shared_review_comment


@dataclasses.dataclass
class PullsListCommentsForReviewPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    pull_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'pull_number', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    review_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'review_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PullsListCommentsForReviewQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PullsListCommentsForReviewRequest:
    path_params: PullsListCommentsForReviewPathParams = dataclasses.field()
    query_params: PullsListCommentsForReviewQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PullsListCommentsForReviewResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    review_comments: Optional[list[shared_review_comment.ReviewComment]] = dataclasses.field(default=None)
    
