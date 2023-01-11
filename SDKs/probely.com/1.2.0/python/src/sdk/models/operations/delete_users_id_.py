import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class DeleteUsersIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteUsersID401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteUsersID403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteUsersID404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class DeleteUsersIDRequest:
    path_params: DeleteUsersIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteUsersIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_users_id_401_application_json_object: Optional[DeleteUsersID401ApplicationJSON] = dataclasses.field(default=None)
    delete_users_id_403_application_json_object: Optional[DeleteUsersID403ApplicationJSON] = dataclasses.field(default=None)
    delete_users_id_404_application_json_object: Optional[DeleteUsersID404ApplicationJSON] = dataclasses.field(default=None)
    
