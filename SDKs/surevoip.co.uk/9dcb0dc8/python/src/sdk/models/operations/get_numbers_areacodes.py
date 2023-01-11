import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetNumbersAreacodes200ApplicationJSON:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclasses.dataclass
class GetNumbersAreacodesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_numbers_areacodes_200_application_json_object: Optional[GetNumbersAreacodes200ApplicationJSON] = dataclasses.field(default=None)
    
