import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import user as shared_user


@dataclasses.dataclass
class GetUsersIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetUsersID401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetUsersID404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class GetUsersIDRequest:
    path_params: GetUsersIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUsersIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user: Optional[shared_user.User] = dataclasses.field(default=None)
    get_users_id_401_application_json_object: Optional[GetUsersID401ApplicationJSON] = dataclasses.field(default=None)
    get_users_id_404_application_json_object: Optional[GetUsersID404ApplicationJSON] = dataclasses.field(default=None)
    
