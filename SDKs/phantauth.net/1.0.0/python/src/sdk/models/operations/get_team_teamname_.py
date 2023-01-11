import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetTeamTeamnamePathParams:
    teamname: str = dataclasses.field(metadata={'path_param': { 'field_name': 'teamname', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetTeamTeamname200ApplicationJSON:
    sub: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sub') }})
    at_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@id') }})
    logo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo') }})
    logo_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo_email') }})
    members: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    profile: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    

@dataclasses.dataclass
class GetTeamTeamnameRequest:
    path_params: GetTeamTeamnamePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTeamTeamnameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_team_teamname_200_application_json_object: Optional[GetTeamTeamname200ApplicationJSON] = dataclasses.field(default=None)
    
