import dataclasses
from typing import Optional
from ..shared import commit_comment as shared_commit_comment


@dataclasses.dataclass
class ReposListCommentsForCommitPathParams:
    commit_sha: str = dataclasses.field(metadata={'path_param': { 'field_name': 'commit_sha', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposListCommentsForCommitQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReposListCommentsForCommitRequest:
    path_params: ReposListCommentsForCommitPathParams = dataclasses.field()
    query_params: ReposListCommentsForCommitQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposListCommentsForCommitResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    commit_comments: Optional[list[shared_commit_comment.CommitComment]] = dataclasses.field(default=None)
    
