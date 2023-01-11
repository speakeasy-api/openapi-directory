import dataclasses
from typing import Optional
from ..shared import team_discussion_comment as shared_team_discussion_comment


@dataclasses.dataclass
class TeamsGetDiscussionCommentInOrgPathParams:
    comment_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'comment_number', 'style': 'simple', 'explode': False }})
    discussion_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsGetDiscussionCommentInOrgRequest:
    path_params: TeamsGetDiscussionCommentInOrgPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsGetDiscussionCommentInOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    team_discussion_comment: Optional[shared_team_discussion_comment.TeamDiscussionComment] = dataclasses.field(default=None)
    
