import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetTargetsTargetIDTopVulnsPathParams:
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDTopVulns200ApplicationJSON:
    zero: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('0') }})
    one: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('1') }})
    

@dataclasses.dataclass
class GetTargetsTargetIDTopVulnsRequest:
    path_params: GetTargetsTargetIDTopVulnsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTargetsTargetIDTopVulnsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_targets_target_id_top_vulns_200_application_json_objects: Optional[list[GetTargetsTargetIDTopVulns200ApplicationJSON]] = dataclasses.field(default=None)
    
