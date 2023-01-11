import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import check as shared_check

class GetHealthcheckResult200ApplicationJSONActionEnum(str, Enum):
    GET_HEALTHCHECK_RESULT = "getHealthcheckResult"

class GetHealthcheckResult200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class GetHealthcheckResult200ApplicationJSON:
    action: GetHealthcheckResult200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: list[shared_check.Check] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GetHealthcheckResult200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class GetHealthcheckResultResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_healthcheck_result_200_application_json_object: Optional[GetHealthcheckResult200ApplicationJSON] = dataclasses.field(default=None)
    
