import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import directive as shared_directive


@dataclasses.dataclass
class DirectiveDetailsPathParams:
    directive_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'directiveId', 'style': 'simple', 'explode': False }})
    
class DirectiveDetails200ApplicationJSONActionEnum(str, Enum):
    DIRECTIVE_DETAILS = "directiveDetails"


@dataclass_json
@dataclasses.dataclass
class DirectiveDetails200ApplicationJSONData:
    directives: list[shared_directive.Directive] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('directives') }})
    
class DirectiveDetails200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class DirectiveDetails200ApplicationJSON:
    action: DirectiveDetails200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: DirectiveDetails200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: DirectiveDetails200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class DirectiveDetailsRequest:
    path_params: DirectiveDetailsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DirectiveDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    directive_details_200_application_json_object: Optional[DirectiveDetails200ApplicationJSON] = dataclasses.field(default=None)
    
