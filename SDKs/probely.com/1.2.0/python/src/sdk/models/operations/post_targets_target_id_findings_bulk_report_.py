import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import findingbulkids as shared_findingbulkids


@dataclasses.dataclass
class PostTargetsTargetIDFindingsBulkReportPathParams:
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsTargetIDFindingsBulkReport400ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsTargetIDFindingsBulkReport401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsTargetIDFindingsBulkReport404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class PostTargetsTargetIDFindingsBulkReportRequest:
    path_params: PostTargetsTargetIDFindingsBulkReportPathParams = dataclasses.field()
    request: shared_findingbulkids.FindingBulkIds = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostTargetsTargetIDFindingsBulkReportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_targets_target_id_findings_bulk_report_400_application_json_object: Optional[PostTargetsTargetIDFindingsBulkReport400ApplicationJSON] = dataclasses.field(default=None)
    post_targets_target_id_findings_bulk_report_401_application_json_object: Optional[PostTargetsTargetIDFindingsBulkReport401ApplicationJSON] = dataclasses.field(default=None)
    post_targets_target_id_findings_bulk_report_404_application_json_object: Optional[PostTargetsTargetIDFindingsBulkReport404ApplicationJSON] = dataclasses.field(default=None)
    
