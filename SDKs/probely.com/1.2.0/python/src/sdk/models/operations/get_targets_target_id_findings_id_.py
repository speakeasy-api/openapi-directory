import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import finding as shared_finding


@dataclasses.dataclass
class GetTargetsTargetIDFindingsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDFindingsID401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDFindingsID404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class GetTargetsTargetIDFindingsIDRequest:
    path_params: GetTargetsTargetIDFindingsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTargetsTargetIDFindingsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    finding: Optional[shared_finding.Finding] = dataclasses.field(default=None)
    get_targets_target_id_findings_id_401_application_json_object: Optional[GetTargetsTargetIDFindingsID401ApplicationJSON] = dataclasses.field(default=None)
    get_targets_target_id_findings_id_404_application_json_object: Optional[GetTargetsTargetIDFindingsID404ApplicationJSON] = dataclasses.field(default=None)
    
