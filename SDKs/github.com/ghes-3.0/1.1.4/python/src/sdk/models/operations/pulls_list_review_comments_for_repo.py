import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import repo_enum4 as shared_repo_enum4
from ..shared import repo_enum6 as shared_repo_enum6
from ..shared import pull_request_review_comment as shared_pull_request_review_comment


@dataclasses.dataclass
class PullsListReviewCommentsForRepoPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PullsListReviewCommentsForRepoQueryParams:
    direction: Optional[shared_repo_enum4.RepoEnum4] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    since: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    sort: Optional[shared_repo_enum6.RepoEnum6] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PullsListReviewCommentsForRepoRequest:
    path_params: PullsListReviewCommentsForRepoPathParams = dataclasses.field()
    query_params: PullsListReviewCommentsForRepoQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PullsListReviewCommentsForRepoResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    pull_request_review_comments: Optional[list[shared_pull_request_review_comment.PullRequestReviewComment]] = dataclasses.field(default=None)
    
