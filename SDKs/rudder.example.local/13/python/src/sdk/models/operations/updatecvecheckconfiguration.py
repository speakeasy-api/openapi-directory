import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UpdateCveCheckConfigurationRequestBody:
    r"""UpdateCveCheckConfigurationRequestBody
    CVE check config
    """
    
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKey') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
class UpdateCveCheckConfiguration200ApplicationJSONActionEnum(str, Enum):
    UPDATE_CVE_CHECK_CONFIGURATION = "updateCVECheckConfiguration"


@dataclass_json
@dataclasses.dataclass
class UpdateCveCheckConfiguration200ApplicationJSONData:
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKey') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
class UpdateCveCheckConfiguration200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class UpdateCveCheckConfiguration200ApplicationJSON:
    action: UpdateCveCheckConfiguration200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: UpdateCveCheckConfiguration200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: UpdateCveCheckConfiguration200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class UpdateCveCheckConfigurationRequest:
    request: Optional[UpdateCveCheckConfigurationRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateCveCheckConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_cve_check_configuration_200_application_json_object: Optional[UpdateCveCheckConfiguration200ApplicationJSON] = dataclasses.field(default=None)
    
