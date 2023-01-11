import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import findingupdate as shared_findingupdate
from ..shared import finding as shared_finding


@dataclasses.dataclass
class PutTargetsTargetIDFindingsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PutTargetsTargetIDFindingsID400ApplicationJSON:
    less_than_field_name_greater_than_: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('<field name>') }})
    non_field_errors: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('non_field_errors') }})
    

@dataclass_json
@dataclasses.dataclass
class PutTargetsTargetIDFindingsID401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PutTargetsTargetIDFindingsID403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PutTargetsTargetIDFindingsID404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class PutTargetsTargetIDFindingsIDRequest:
    path_params: PutTargetsTargetIDFindingsIDPathParams = dataclasses.field()
    request: shared_findingupdate.FindingUpdateInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutTargetsTargetIDFindingsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    finding: Optional[shared_finding.Finding] = dataclasses.field(default=None)
    put_targets_target_id_findings_id_400_application_json_object: Optional[PutTargetsTargetIDFindingsID400ApplicationJSON] = dataclasses.field(default=None)
    put_targets_target_id_findings_id_401_application_json_object: Optional[PutTargetsTargetIDFindingsID401ApplicationJSON] = dataclasses.field(default=None)
    put_targets_target_id_findings_id_403_application_json_object: Optional[PutTargetsTargetIDFindingsID403ApplicationJSON] = dataclasses.field(default=None)
    put_targets_target_id_findings_id_404_application_json_object: Optional[PutTargetsTargetIDFindingsID404ApplicationJSON] = dataclasses.field(default=None)
    
