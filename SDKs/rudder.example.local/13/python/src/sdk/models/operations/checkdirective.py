import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import directive as shared_directive


@dataclasses.dataclass
class CheckDirectivePathParams:
    directive_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'directiveId', 'style': 'simple', 'explode': False }})
    
class CheckDirective200ApplicationJSONActionEnum(str, Enum):
    CHECK_DIRECTIVE = "checkDirective"


@dataclass_json
@dataclasses.dataclass
class CheckDirective200ApplicationJSONData:
    directives: list[shared_directive.Directive] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('directives') }})
    
class CheckDirective200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class CheckDirective200ApplicationJSON:
    action: CheckDirective200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: CheckDirective200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: CheckDirective200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class CheckDirectiveRequest:
    path_params: CheckDirectivePathParams = dataclasses.field()
    request: shared_directive.Directive = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CheckDirectiveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    check_directive_200_application_json_object: Optional[CheckDirective200ApplicationJSON] = dataclasses.field(default=None)
    
