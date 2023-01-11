import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import findingbulkupdate as shared_findingbulkupdate


@dataclasses.dataclass
class PatchTargetsTargetIDFindingsBulkUpdatePathParams:
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PatchTargetsTargetIDFindingsBulkUpdate400ApplicationJSON:
    less_than_field_name_greater_than_: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('<field name>') }})
    non_field_errors: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('non_field_errors') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchTargetsTargetIDFindingsBulkUpdate401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchTargetsTargetIDFindingsBulkUpdate404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class PatchTargetsTargetIDFindingsBulkUpdateRequest:
    path_params: PatchTargetsTargetIDFindingsBulkUpdatePathParams = dataclasses.field()
    request: shared_findingbulkupdate.FindingBulkUpdateInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchTargetsTargetIDFindingsBulkUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    patch_targets_target_id_findings_bulk_update_400_application_json_object: Optional[PatchTargetsTargetIDFindingsBulkUpdate400ApplicationJSON] = dataclasses.field(default=None)
    patch_targets_target_id_findings_bulk_update_401_application_json_object: Optional[PatchTargetsTargetIDFindingsBulkUpdate401ApplicationJSON] = dataclasses.field(default=None)
    patch_targets_target_id_findings_bulk_update_404_application_json_object: Optional[PatchTargetsTargetIDFindingsBulkUpdate404ApplicationJSON] = dataclasses.field(default=None)
    
