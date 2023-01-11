import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetSettingPathParams:
    setting_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'settingId', 'style': 'simple', 'explode': False }})
    
class GetSetting200ApplicationJSONActionEnum(str, Enum):
    GET_SETTING = "getSetting"


@dataclass_json
@dataclasses.dataclass
class GetSetting200ApplicationJSONData:
    r"""GetSetting200ApplicationJSONData
    Information about the setting
    """
    
    setting_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settingId') }})
    
class GetSetting200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class GetSetting200ApplicationJSON:
    action: GetSetting200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetSetting200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    result: GetSetting200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class GetSettingRequest:
    path_params: GetSettingPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSettingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_setting_200_application_json_object: Optional[GetSetting200ApplicationJSON] = dataclasses.field(default=None)
    
