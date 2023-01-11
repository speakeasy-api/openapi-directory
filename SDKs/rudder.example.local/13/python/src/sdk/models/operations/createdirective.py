import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import directive as shared_directive
from ..shared import directive_new as shared_directive_new

class CreateDirective200ApplicationJSONActionEnum(str, Enum):
    CREATE_DIRECTIVE = "createDirective"


@dataclass_json
@dataclasses.dataclass
class CreateDirective200ApplicationJSONData:
    directives: list[shared_directive.Directive] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('directives') }})
    
class CreateDirective200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class CreateDirective200ApplicationJSON:
    action: CreateDirective200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: CreateDirective200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: CreateDirective200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class CreateDirectiveRequest:
    request: Optional[shared_directive_new.DirectiveNew] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateDirectiveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_directive_200_application_json_object: Optional[CreateDirective200ApplicationJSON] = dataclasses.field(default=None)
    
