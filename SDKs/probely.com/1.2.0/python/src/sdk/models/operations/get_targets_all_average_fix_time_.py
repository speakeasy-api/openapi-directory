import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetTargetsAllAverageFixTime200ApplicationJSONResults:
    high: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('high') }})
    low: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('low') }})
    medium: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('medium') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsAllAverageFixTime200ApplicationJSON:
    results: Optional[GetTargetsAllAverageFixTime200ApplicationJSONResults] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclasses.dataclass
class GetTargetsAllAverageFixTimeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_targets_all_average_fix_time_200_application_json_object: Optional[GetTargetsAllAverageFixTime200ApplicationJSON] = dataclasses.field(default=None)
    
