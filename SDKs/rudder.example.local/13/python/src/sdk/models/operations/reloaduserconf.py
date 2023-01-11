import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ReloadUserConf200ApplicationJSONActionEnum(str, Enum):
    RELOAD_USER_CONF = "reloadUserConf"


@dataclass_json
@dataclasses.dataclass
class ReloadUserConf200ApplicationJSONDataReload:
    status: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class ReloadUserConf200ApplicationJSONData:
    reload: ReloadUserConf200ApplicationJSONDataReload = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reload') }})
    
class ReloadUserConf200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class ReloadUserConf200ApplicationJSON:
    action: ReloadUserConf200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ReloadUserConf200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ReloadUserConf200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class ReloadUserConfResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    reload_user_conf_200_application_json_object: Optional[ReloadUserConf200ApplicationJSON] = dataclasses.field(default=None)
    
