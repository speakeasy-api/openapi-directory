import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetCveCheckConfiguration200ApplicationJSONActionEnum(str, Enum):
    GET_CVE_CHECK_CONFIGURATION = "getCVECheckConfiguration"


@dataclass_json
@dataclasses.dataclass
class GetCveCheckConfiguration200ApplicationJSONData:
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKey') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
class GetCveCheckConfiguration200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class GetCveCheckConfiguration200ApplicationJSON:
    action: GetCveCheckConfiguration200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetCveCheckConfiguration200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GetCveCheckConfiguration200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class GetCveCheckConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_cve_check_configuration_200_application_json_object: Optional[GetCveCheckConfiguration200ApplicationJSON] = dataclasses.field(default=None)
    
