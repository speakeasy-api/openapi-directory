import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import parameter as shared_parameter

class ListParameters200ApplicationJSONActionEnum(str, Enum):
    LIST_PARAMETERS = "listParameters"


@dataclass_json
@dataclasses.dataclass
class ListParameters200ApplicationJSONData:
    r"""ListParameters200ApplicationJSONData
    Parameters
    """
    
    parameters: list[shared_parameter.Parameter] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    
class ListParameters200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class ListParameters200ApplicationJSON:
    action: ListParameters200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ListParameters200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ListParameters200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class ListParametersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_parameters_200_application_json_object: Optional[ListParameters200ApplicationJSON] = dataclasses.field(default=None)
    
