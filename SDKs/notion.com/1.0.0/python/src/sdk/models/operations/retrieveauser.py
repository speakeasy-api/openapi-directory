import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class RetrieveAUserPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class RetrieveAUser200ApplicationJSONPerson:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    

@dataclass_json
@dataclasses.dataclass
class RetrieveAUser200ApplicationJSON:
    avatar_url: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avatar_url') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    object: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    person: Optional[RetrieveAUser200ApplicationJSONPerson] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('person') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class RetrieveAUserRequest:
    path_params: RetrieveAUserPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RetrieveAUserResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    retrieve_a_user_200_application_json_object: Optional[RetrieveAUser200ApplicationJSON] = dataclasses.field(default=None)
    
