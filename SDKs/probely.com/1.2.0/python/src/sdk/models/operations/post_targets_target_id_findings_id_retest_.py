import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scan as shared_scan


@dataclasses.dataclass
class PostTargetsTargetIDFindingsIDRetestPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsTargetIDFindingsIDRetest401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsTargetIDFindingsIDRetest403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsTargetIDFindingsIDRetest404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class PostTargetsTargetIDFindingsIDRetestRequest:
    path_params: PostTargetsTargetIDFindingsIDRetestPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PostTargetsTargetIDFindingsIDRetestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    scan: Optional[shared_scan.Scan] = dataclasses.field(default=None)
    post_targets_target_id_findings_id_retest_401_application_json_object: Optional[PostTargetsTargetIDFindingsIDRetest401ApplicationJSON] = dataclasses.field(default=None)
    post_targets_target_id_findings_id_retest_403_application_json_object: Optional[PostTargetsTargetIDFindingsIDRetest403ApplicationJSON] = dataclasses.field(default=None)
    post_targets_target_id_findings_id_retest_404_application_json_object: Optional[PostTargetsTargetIDFindingsIDRetest404ApplicationJSON] = dataclasses.field(default=None)
    
