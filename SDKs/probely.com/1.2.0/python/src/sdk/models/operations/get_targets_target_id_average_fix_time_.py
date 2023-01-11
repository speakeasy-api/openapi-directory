import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetTargetsTargetIDAverageFixTimePathParams:
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDAverageFixTime200ApplicationJSONResults:
    high: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('high') }})
    low: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('low') }})
    medium: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('medium') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDAverageFixTime200ApplicationJSON:
    results: Optional[GetTargetsTargetIDAverageFixTime200ApplicationJSONResults] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclasses.dataclass
class GetTargetsTargetIDAverageFixTimeRequest:
    path_params: GetTargetsTargetIDAverageFixTimePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTargetsTargetIDAverageFixTimeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_targets_target_id_average_fix_time_200_application_json_object: Optional[GetTargetsTargetIDAverageFixTime200ApplicationJSON] = dataclasses.field(default=None)
    
