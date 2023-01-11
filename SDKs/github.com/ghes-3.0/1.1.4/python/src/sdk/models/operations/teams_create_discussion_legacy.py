import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import team_discussion as shared_team_discussion


@dataclasses.dataclass
class TeamsCreateDiscussionLegacyPathParams:
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class TeamsCreateDiscussionLegacyRequestBody:
    body: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    private: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private') }})
    

@dataclasses.dataclass
class TeamsCreateDiscussionLegacyRequest:
    path_params: TeamsCreateDiscussionLegacyPathParams = dataclasses.field()
    request: Optional[TeamsCreateDiscussionLegacyRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class TeamsCreateDiscussionLegacyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    team_discussion: Optional[shared_team_discussion.TeamDiscussion] = dataclasses.field(default=None)
    
