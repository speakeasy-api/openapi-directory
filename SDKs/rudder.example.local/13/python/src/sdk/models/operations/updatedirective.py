import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import directive as shared_directive


@dataclasses.dataclass
class UpdateDirectivePathParams:
    directive_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'directiveId', 'style': 'simple', 'explode': False }})
    
class UpdateDirective200ApplicationJSONActionEnum(str, Enum):
    UPDATE_DIRECTIVE = "updateDirective"


@dataclass_json
@dataclasses.dataclass
class UpdateDirective200ApplicationJSONData:
    directives: list[shared_directive.Directive] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('directives') }})
    
class UpdateDirective200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class UpdateDirective200ApplicationJSON:
    action: UpdateDirective200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: UpdateDirective200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: UpdateDirective200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class UpdateDirectiveRequest:
    path_params: UpdateDirectivePathParams = dataclasses.field()
    request: shared_directive.Directive = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateDirectiveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_directive_200_application_json_object: Optional[UpdateDirective200ApplicationJSON] = dataclasses.field(default=None)
    
