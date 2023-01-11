import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetRole200ApplicationJSONActionEnum(str, Enum):
    GET_ROLE = "getRole"

class GetRole200ApplicationJSONDataIDEnum(str, Enum):
    INVENTORY = "inventory"
    COMPLIANCE = "compliance"
    ADMINISTRATOR = "administrator"
    ETC = "etc"

class GetRole200ApplicationJSONDataRightsEnum(str, Enum):
    NODE_READ = "node_read"
    USER_ACCOUNT_ALL = "userAccount_all"


@dataclass_json
@dataclasses.dataclass
class GetRole200ApplicationJSONData:
    id: GetRole200ApplicationJSONDataIDEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    rights: list[GetRole200ApplicationJSONDataRightsEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rights') }})
    
class GetRole200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class GetRole200ApplicationJSON:
    action: GetRole200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: list[GetRole200ApplicationJSONData] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GetRole200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class GetRoleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_role_200_application_json_object: Optional[GetRole200ApplicationJSON] = dataclasses.field(default=None)
    
