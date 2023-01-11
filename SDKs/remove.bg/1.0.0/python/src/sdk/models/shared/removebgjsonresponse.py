import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RemoveBgJSONResponseData:
    result_b64: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result_b64') }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveBgJSONResponse:
    data: Optional[RemoveBgJSONResponseData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
