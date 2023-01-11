import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import parameter as shared_parameter


@dataclasses.dataclass
class ParameterDetailsPathParams:
    parameter_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'parameterId', 'style': 'simple', 'explode': False }})
    
class ParameterDetails200ApplicationJSONActionEnum(str, Enum):
    PARAMETER_DETAILS = "parameterDetails"


@dataclass_json
@dataclasses.dataclass
class ParameterDetails200ApplicationJSONData:
    r"""ParameterDetails200ApplicationJSONData
    Parameters
    """
    
    parameters: list[shared_parameter.Parameter] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    
class ParameterDetails200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class ParameterDetails200ApplicationJSON:
    action: ParameterDetails200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ParameterDetails200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    result: ParameterDetails200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class ParameterDetailsRequest:
    path_params: ParameterDetailsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ParameterDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    parameter_details_200_application_json_object: Optional[ParameterDetails200ApplicationJSON] = dataclasses.field(default=None)
    
