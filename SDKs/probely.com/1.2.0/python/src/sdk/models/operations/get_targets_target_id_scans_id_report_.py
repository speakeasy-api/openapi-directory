import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetTargetsTargetIDScansIDReportPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDScansIDReport401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDScansIDReport404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class GetTargetsTargetIDScansIDReportRequest:
    path_params: GetTargetsTargetIDScansIDReportPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTargetsTargetIDScansIDReportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_targets_target_id_scans_id_report_200_application_pdf_binary_string: Optional[bytes] = dataclasses.field(default=None)
    get_targets_target_id_scans_id_report_401_application_json_object: Optional[GetTargetsTargetIDScansIDReport401ApplicationJSON] = dataclasses.field(default=None)
    get_targets_target_id_scans_id_report_404_application_json_object: Optional[GetTargetsTargetIDScansIDReport404ApplicationJSON] = dataclasses.field(default=None)
    
