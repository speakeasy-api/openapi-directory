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
class UpdateCveRequestBody:
    r"""UpdateCveRequestBody
    CVE update config
    """
    
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    years: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('years') }})
    
class UpdateCve200ApplicationJSONActionEnum(str, Enum):
    UPDATE_CVE = "updateCVE"


@dataclass_json
@dataclasses.dataclass
class UpdateCve200ApplicationJSONData:
    cv_es: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CVEs') }})
    
class UpdateCve200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class UpdateCve200ApplicationJSON:
    action: UpdateCve200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: UpdateCve200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: UpdateCve200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class UpdateCveRequest:
    request: Optional[UpdateCveRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateCveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_cve_200_application_json_object: Optional[UpdateCve200ApplicationJSON] = dataclasses.field(default=None)
    
