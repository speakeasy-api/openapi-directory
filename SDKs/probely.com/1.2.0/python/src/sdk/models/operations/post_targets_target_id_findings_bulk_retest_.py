import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import findingbulkretest as shared_findingbulkretest


@dataclasses.dataclass
class PostTargetsTargetIDFindingsBulkRetestPathParams:
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsTargetIDFindingsBulkRetest400ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsTargetIDFindingsBulkRetest401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsTargetIDFindingsBulkRetest404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class PostTargetsTargetIDFindingsBulkRetestRequest:
    path_params: PostTargetsTargetIDFindingsBulkRetestPathParams = dataclasses.field()
    request: shared_findingbulkretest.FindingBulkRetest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostTargetsTargetIDFindingsBulkRetestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_targets_target_id_findings_bulk_retest_400_application_json_object: Optional[PostTargetsTargetIDFindingsBulkRetest400ApplicationJSON] = dataclasses.field(default=None)
    post_targets_target_id_findings_bulk_retest_401_application_json_object: Optional[PostTargetsTargetIDFindingsBulkRetest401ApplicationJSON] = dataclasses.field(default=None)
    post_targets_target_id_findings_bulk_retest_404_application_json_object: Optional[PostTargetsTargetIDFindingsBulkRetest404ApplicationJSON] = dataclasses.field(default=None)
    
