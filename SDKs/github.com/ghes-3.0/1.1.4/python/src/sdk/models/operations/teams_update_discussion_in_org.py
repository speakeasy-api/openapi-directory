import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import team_discussion as shared_team_discussion


@dataclasses.dataclass
class TeamsUpdateDiscussionInOrgPathParams:
    discussion_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class TeamsUpdateDiscussionInOrgRequestBody:
    body: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclasses.dataclass
class TeamsUpdateDiscussionInOrgRequest:
    path_params: TeamsUpdateDiscussionInOrgPathParams = dataclasses.field()
    request: Optional[TeamsUpdateDiscussionInOrgRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class TeamsUpdateDiscussionInOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    team_discussion: Optional[shared_team_discussion.TeamDiscussion] = dataclasses.field(default=None)
    
