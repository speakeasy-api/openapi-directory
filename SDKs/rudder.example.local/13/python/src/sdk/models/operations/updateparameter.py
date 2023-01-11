import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import parameter as shared_parameter


@dataclasses.dataclass
class UpdateParameterPathParams:
    parameter_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'parameterId', 'style': 'simple', 'explode': False }})
    
class UpdateParameter200ApplicationJSONActionEnum(str, Enum):
    UPDATE_PARAMETER = "updateParameter"


@dataclass_json
@dataclasses.dataclass
class UpdateParameter200ApplicationJSONData:
    r"""UpdateParameter200ApplicationJSONData
    Parameters
    """
    
    parameters: list[shared_parameter.Parameter] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    
class UpdateParameter200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class UpdateParameter200ApplicationJSON:
    action: UpdateParameter200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: UpdateParameter200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    result: UpdateParameter200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class UpdateParameterRequest:
    path_params: UpdateParameterPathParams = dataclasses.field()
    

@dataclasses.dataclass
class UpdateParameterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_parameter_200_application_json_object: Optional[UpdateParameter200ApplicationJSON] = dataclasses.field(default=None)
    
