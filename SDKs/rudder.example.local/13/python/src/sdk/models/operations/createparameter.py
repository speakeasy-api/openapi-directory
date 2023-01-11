import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import parameter as shared_parameter

class CreateParameter200ApplicationJSONActionEnum(str, Enum):
    CREATE_PARAMETER = "createParameter"


@dataclass_json
@dataclasses.dataclass
class CreateParameter200ApplicationJSONData:
    r"""CreateParameter200ApplicationJSONData
    Parameters
    """
    
    parameters: list[shared_parameter.Parameter] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    
class CreateParameter200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class CreateParameter200ApplicationJSON:
    action: CreateParameter200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: CreateParameter200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    result: CreateParameter200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class CreateParameterRequest:
    request: shared_parameter.Parameter = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateParameterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_parameter_200_application_json_object: Optional[CreateParameter200ApplicationJSON] = dataclasses.field(default=None)
    
