import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cvecheck as shared_cvecheck

class GetLastCveCheck200ApplicationJSONActionEnum(str, Enum):
    GET_LAST_CVE_CHECK = "getLastCVECheck"


@dataclass_json
@dataclasses.dataclass
class GetLastCveCheck200ApplicationJSONData:
    cve_checks: list[shared_cvecheck.CveCheck] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CVEChecks') }})
    
class GetLastCveCheck200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class GetLastCveCheck200ApplicationJSON:
    action: GetLastCveCheck200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetLastCveCheck200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GetLastCveCheck200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class GetLastCveCheckResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_last_cve_check_200_application_json_object: Optional[GetLastCveCheck200ApplicationJSON] = dataclasses.field(default=None)
    
