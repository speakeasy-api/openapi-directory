import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ModifySettingPathParams:
    setting_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'settingId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ModifySettingRequestBody:
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class ModifySetting200ApplicationJSONActionEnum(str, Enum):
    MODIFY_SETTING = "modifySetting"


@dataclass_json
@dataclasses.dataclass
class ModifySetting200ApplicationJSONData:
    r"""ModifySetting200ApplicationJSONData
    Information about the setting
    """
    
    setting_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settingId') }})
    
class ModifySetting200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class ModifySetting200ApplicationJSON:
    action: ModifySetting200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ModifySetting200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    result: ModifySetting200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class ModifySettingRequest:
    path_params: ModifySettingPathParams = dataclasses.field()
    request: ModifySettingRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ModifySettingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    modify_setting_200_application_json_object: Optional[ModifySetting200ApplicationJSON] = dataclasses.field(default=None)
    
