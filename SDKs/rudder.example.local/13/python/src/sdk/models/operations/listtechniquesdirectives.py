import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import directive as shared_directive


@dataclasses.dataclass
class ListTechniquesDirectivesPathParams:
    technique_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'techniqueName', 'style': 'simple', 'explode': False }})
    
class ListTechniquesDirectives200ApplicationJSONActionEnum(str, Enum):
    LIST_TECHNIQUES_DIRECTIVES = "listTechniquesDirectives"


@dataclass_json
@dataclasses.dataclass
class ListTechniquesDirectives200ApplicationJSONData:
    directives: list[shared_directive.Directive] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('directives') }})
    
class ListTechniquesDirectives200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class ListTechniquesDirectives200ApplicationJSON:
    action: ListTechniquesDirectives200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ListTechniquesDirectives200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ListTechniquesDirectives200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class ListTechniquesDirectivesRequest:
    path_params: ListTechniquesDirectivesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ListTechniquesDirectivesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_techniques_directives_200_application_json_object: Optional[ListTechniquesDirectives200ApplicationJSON] = dataclasses.field(default=None)
    
