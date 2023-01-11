import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import directive as shared_directive

class ListDirectives200ApplicationJSONActionEnum(str, Enum):
    LIST_DIRECTIVES = "listDirectives"


@dataclass_json
@dataclasses.dataclass
class ListDirectives200ApplicationJSONData:
    directives: list[shared_directive.Directive] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('directives') }})
    
class ListDirectives200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class ListDirectives200ApplicationJSON:
    action: ListDirectives200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ListDirectives200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ListDirectives200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class ListDirectivesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_directives_200_application_json_object: Optional[ListDirectives200ApplicationJSON] = dataclasses.field(default=None)
    
