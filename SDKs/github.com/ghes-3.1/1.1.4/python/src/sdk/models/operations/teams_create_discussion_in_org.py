import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import team_discussion as shared_team_discussion


@dataclasses.dataclass
class TeamsCreateDiscussionInOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class TeamsCreateDiscussionInOrgRequestBody:
    body: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    private: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private') }})
    

@dataclasses.dataclass
class TeamsCreateDiscussionInOrgRequest:
    path_params: TeamsCreateDiscussionInOrgPathParams = dataclasses.field()
    request: Optional[TeamsCreateDiscussionInOrgRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class TeamsCreateDiscussionInOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    team_discussion: Optional[shared_team_discussion.TeamDiscussion] = dataclasses.field(default=None)
    
