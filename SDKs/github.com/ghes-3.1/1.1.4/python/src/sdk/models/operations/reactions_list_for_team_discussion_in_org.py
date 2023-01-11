import dataclasses
from typing import Optional
from enum import Enum
from ..shared import discussion_number_enum as shared_discussion_number_enum
from ..shared import reaction as shared_reaction


@dataclasses.dataclass
class ReactionsListForTeamDiscussionInOrgPathParams:
    discussion_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReactionsListForTeamDiscussionInOrgQueryParams:
    content: Optional[shared_discussion_number_enum.DiscussionNumberEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'content', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReactionsListForTeamDiscussionInOrgRequest:
    path_params: ReactionsListForTeamDiscussionInOrgPathParams = dataclasses.field()
    query_params: ReactionsListForTeamDiscussionInOrgQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReactionsListForTeamDiscussionInOrgResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    reactions: Optional[list[shared_reaction.Reaction]] = dataclasses.field(default=None)
    
