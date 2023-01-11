import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import activity as shared_activity


@dataclasses.dataclass
class GetTargetsTargetIDFindingsIDLogPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDFindingsIDLog401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDFindingsIDLog404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class GetTargetsTargetIDFindingsIDLogRequest:
    path_params: GetTargetsTargetIDFindingsIDLogPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTargetsTargetIDFindingsIDLogResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    activities: Optional[list[shared_activity.Activity]] = dataclasses.field(default=None)
    get_targets_target_id_findings_id_log_401_application_json_object: Optional[GetTargetsTargetIDFindingsIDLog401ApplicationJSON] = dataclasses.field(default=None)
    get_targets_target_id_findings_id_log_404_application_json_object: Optional[GetTargetsTargetIDFindingsIDLog404ApplicationJSON] = dataclasses.field(default=None)
    
