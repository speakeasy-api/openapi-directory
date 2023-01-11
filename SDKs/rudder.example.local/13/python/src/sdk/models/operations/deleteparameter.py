import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import parameter as shared_parameter


@dataclasses.dataclass
class DeleteParameterPathParams:
    parameter_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'parameterId', 'style': 'simple', 'explode': False }})
    
class DeleteParameter200ApplicationJSONActionEnum(str, Enum):
    DELETE_PARAMETER = "deleteParameter"


@dataclass_json
@dataclasses.dataclass
class DeleteParameter200ApplicationJSONData:
    r"""DeleteParameter200ApplicationJSONData
    Parameters
    """
    
    parameters: list[shared_parameter.Parameter] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    
class DeleteParameter200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class DeleteParameter200ApplicationJSON:
    action: DeleteParameter200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: DeleteParameter200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    result: DeleteParameter200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    
class DeleteParameter500ApplicationJSONActionEnum(str, Enum):
    DELETE_PARAMETER = "deleteParameter"

class DeleteParameter500ApplicationJSONResultEnum(str, Enum):
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class DeleteParameter500ApplicationJSON:
    action: DeleteParameter500ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    result: DeleteParameter500ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    error_details: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDetails') }})
    

@dataclasses.dataclass
class DeleteParameterRequest:
    path_params: DeleteParameterPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteParameterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_parameter_200_application_json_object: Optional[DeleteParameter200ApplicationJSON] = dataclasses.field(default=None)
    delete_parameter_500_application_json_object: Optional[DeleteParameter500ApplicationJSON] = dataclasses.field(default=None)
    
