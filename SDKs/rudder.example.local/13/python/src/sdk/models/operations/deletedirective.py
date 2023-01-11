import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import directive as shared_directive


@dataclasses.dataclass
class DeleteDirectivePathParams:
    directive_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'directiveId', 'style': 'simple', 'explode': False }})
    
class DeleteDirective200ApplicationJSONActionEnum(str, Enum):
    DELETE_DIRECTIVE = "deleteDirective"


@dataclass_json
@dataclasses.dataclass
class DeleteDirective200ApplicationJSONData:
    directives: list[shared_directive.Directive] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('directives') }})
    
class DeleteDirective200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class DeleteDirective200ApplicationJSON:
    action: DeleteDirective200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: DeleteDirective200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: DeleteDirective200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class DeleteDirectiveRequest:
    path_params: DeleteDirectivePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteDirectiveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_directive_200_application_json_object: Optional[DeleteDirective200ApplicationJSON] = dataclasses.field(default=None)
    
