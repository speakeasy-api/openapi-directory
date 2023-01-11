import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import users as shared_users

class GetUserInfo200ApplicationJSONActionEnum(str, Enum):
    GET_USER_INFO = "getUserInfo"

class GetUserInfo200ApplicationJSONDataDigestEnum(str, Enum):
    BCRYPT = "BCRYPT"
    SHA512 = "SHA512"
    SHA256 = "SHA256"
    SHA1 = "SHA1"
    MD5 = "MD5"


@dataclass_json
@dataclasses.dataclass
class GetUserInfo200ApplicationJSONData:
    digest: GetUserInfo200ApplicationJSONDataDigestEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('digest') }})
    users: list[shared_users.Users] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    
class GetUserInfo200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class GetUserInfo200ApplicationJSON:
    action: GetUserInfo200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetUserInfo200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GetUserInfo200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class GetUserInfoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_user_info_200_application_json_object: Optional[GetUserInfo200ApplicationJSON] = dataclasses.field(default=None)
    
