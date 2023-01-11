import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import techniques as shared_techniques

class ListTechniques200ApplicationJSONActionEnum(str, Enum):
    LIST_TECHNIQUES = "listTechniques"


@dataclass_json
@dataclasses.dataclass
class ListTechniques200ApplicationJSONData:
    techniques: list[shared_techniques.Techniques] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('techniques') }})
    
class ListTechniques200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class ListTechniques200ApplicationJSON:
    action: ListTechniques200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ListTechniques200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ListTechniques200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class ListTechniquesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_techniques_200_application_json_object: Optional[ListTechniques200ApplicationJSON] = dataclasses.field(default=None)
    
