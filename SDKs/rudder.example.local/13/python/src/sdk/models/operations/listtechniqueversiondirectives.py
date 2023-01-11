import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import directive as shared_directive


@dataclasses.dataclass
class ListTechniqueVersionDirectivesPathParams:
    technique_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'techniqueName', 'style': 'simple', 'explode': False }})
    technique_version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'techniqueVersion', 'style': 'simple', 'explode': False }})
    
class ListTechniqueVersionDirectives200ApplicationJSONActionEnum(str, Enum):
    LIST_TECHNIQUE_DIRECTIVES = "listTechniqueDirectives"


@dataclass_json
@dataclasses.dataclass
class ListTechniqueVersionDirectives200ApplicationJSONData:
    directives: list[shared_directive.Directive] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('directives') }})
    
class ListTechniqueVersionDirectives200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class ListTechniqueVersionDirectives200ApplicationJSON:
    action: ListTechniqueVersionDirectives200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ListTechniqueVersionDirectives200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ListTechniqueVersionDirectives200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class ListTechniqueVersionDirectivesRequest:
    path_params: ListTechniqueVersionDirectivesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ListTechniqueVersionDirectivesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_technique_version_directives_200_application_json_object: Optional[ListTechniqueVersionDirectives200ApplicationJSON] = dataclasses.field(default=None)
    
