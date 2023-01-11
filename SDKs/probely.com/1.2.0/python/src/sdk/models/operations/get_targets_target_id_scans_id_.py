import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scan as shared_scan


@dataclasses.dataclass
class GetTargetsTargetIDScansIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDScansID401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDScansID404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class GetTargetsTargetIDScansIDRequest:
    path_params: GetTargetsTargetIDScansIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTargetsTargetIDScansIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    scan: Optional[shared_scan.Scan] = dataclasses.field(default=None)
    get_targets_target_id_scans_id_401_application_json_object: Optional[GetTargetsTargetIDScansID401ApplicationJSON] = dataclasses.field(default=None)
    get_targets_target_id_scans_id_404_application_json_object: Optional[GetTargetsTargetIDScansID404ApplicationJSON] = dataclasses.field(default=None)
    
