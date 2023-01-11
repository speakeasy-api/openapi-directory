import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetFleetFleetnamePathParams:
    fleetname: str = dataclasses.field(metadata={'path_param': { 'field_name': 'fleetname', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetFleetFleetname200ApplicationJSON:
    sub: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sub') }})
    at_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@id') }})
    logo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo') }})
    logo_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo_email') }})
    members: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    profile: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    

@dataclasses.dataclass
class GetFleetFleetnameRequest:
    path_params: GetFleetFleetnamePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFleetFleetnameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_fleet_fleetname_200_application_json_object: Optional[GetFleetFleetname200ApplicationJSON] = dataclasses.field(default=None)
    
