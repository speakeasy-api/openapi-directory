import dataclasses
from typing import Optional
from enum import Enum
from ..shared import direction_enum as shared_direction_enum
from ..shared import team_discussion_comment as shared_team_discussion_comment


@dataclasses.dataclass
class TeamsListDiscussionCommentsInOrgPathParams:
    discussion_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsListDiscussionCommentsInOrgQueryParams:
    direction: Optional[shared_direction_enum.DirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TeamsListDiscussionCommentsInOrgRequest:
    path_params: TeamsListDiscussionCommentsInOrgPathParams = dataclasses.field()
    query_params: TeamsListDiscussionCommentsInOrgQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsListDiscussionCommentsInOrgResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    team_discussion_comments: Optional[list[shared_team_discussion_comment.TeamDiscussionComment]] = dataclasses.field(default=None)
    
