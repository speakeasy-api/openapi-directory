import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import team_full as shared_team_full


@dataclasses.dataclass
class TeamsUpdateInOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    
class TeamsUpdateInOrgRequestBodyPermissionEnum(str, Enum):
    PULL = "pull"
    PUSH = "push"
    ADMIN = "admin"

class TeamsUpdateInOrgRequestBodyPrivacyEnum(str, Enum):
    SECRET = "secret"
    CLOSED = "closed"


@dataclass_json
@dataclasses.dataclass
class TeamsUpdateInOrgRequestBody:
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_team_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_team_id') }})
    permission: Optional[TeamsUpdateInOrgRequestBodyPermissionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    privacy: Optional[TeamsUpdateInOrgRequestBodyPrivacyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    

@dataclasses.dataclass
class TeamsUpdateInOrgRequest:
    path_params: TeamsUpdateInOrgPathParams = dataclasses.field()
    request: Optional[TeamsUpdateInOrgRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class TeamsUpdateInOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    team_full: Optional[shared_team_full.TeamFull] = dataclasses.field(default=None)
    
