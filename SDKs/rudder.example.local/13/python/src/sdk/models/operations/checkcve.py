import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cvecheck as shared_cvecheck

class CheckCve200ApplicationJSONActionEnum(str, Enum):
    CHECK_CVE = "checkCVE"


@dataclass_json
@dataclasses.dataclass
class CheckCve200ApplicationJSONData:
    cve_checks: list[shared_cvecheck.CveCheck] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cveChecks') }})
    
class CheckCve200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class CheckCve200ApplicationJSON:
    action: CheckCve200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: CheckCve200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: CheckCve200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class CheckCveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    check_cve_200_application_json_object: Optional[CheckCve200ApplicationJSON] = dataclasses.field(default=None)
    
