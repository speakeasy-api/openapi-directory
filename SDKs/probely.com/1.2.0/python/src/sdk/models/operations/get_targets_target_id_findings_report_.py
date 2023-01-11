import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetTargetsTargetIDFindingsReportPathParams:
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTargetsTargetIDFindingsReportQueryParams:
    token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDFindingsReport400ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDFindingsReport401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDFindingsReport404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class GetTargetsTargetIDFindingsReportRequest:
    path_params: GetTargetsTargetIDFindingsReportPathParams = dataclasses.field()
    query_params: GetTargetsTargetIDFindingsReportQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTargetsTargetIDFindingsReportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_targets_target_id_findings_report_200_application_pdf_binary_string: Optional[bytes] = dataclasses.field(default=None)
    get_targets_target_id_findings_report_400_application_json_object: Optional[GetTargetsTargetIDFindingsReport400ApplicationJSON] = dataclasses.field(default=None)
    get_targets_target_id_findings_report_401_application_json_object: Optional[GetTargetsTargetIDFindingsReport401ApplicationJSON] = dataclasses.field(default=None)
    get_targets_target_id_findings_report_404_application_json_object: Optional[GetTargetsTargetIDFindingsReport404ApplicationJSON] = dataclasses.field(default=None)
    
