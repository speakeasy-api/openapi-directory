import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class TeamsAddOrUpdateRepoPermissionsInOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    team_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    
class TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnum(str, Enum):
    PULL = "pull"
    PUSH = "push"
    ADMIN = "admin"
    MAINTAIN = "maintain"
    TRIAGE = "triage"


@dataclass_json
@dataclasses.dataclass
class TeamsAddOrUpdateRepoPermissionsInOrgRequestBody:
    permission: Optional[TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    

@dataclasses.dataclass
class TeamsAddOrUpdateRepoPermissionsInOrgRequest:
    path_params: TeamsAddOrUpdateRepoPermissionsInOrgPathParams = dataclasses.field()
    request: Optional[TeamsAddOrUpdateRepoPermissionsInOrgRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class TeamsAddOrUpdateRepoPermissionsInOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
