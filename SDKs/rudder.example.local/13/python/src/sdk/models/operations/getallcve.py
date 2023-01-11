import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cvedetails as shared_cvedetails

class GetAllCve200ApplicationJSONActionEnum(str, Enum):
    GET_ALL_CVE = "getAllCve"


@dataclass_json
@dataclasses.dataclass
class GetAllCve200ApplicationJSONData:
    cv_es: list[shared_cvedetails.CveDetails] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CVEs') }})
    
class GetAllCve200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class GetAllCve200ApplicationJSON:
    action: GetAllCve200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetAllCve200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GetAllCve200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class GetAllCveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_all_cve_200_application_json_object: Optional[GetAllCve200ApplicationJSON] = dataclasses.field(default=None)
    
