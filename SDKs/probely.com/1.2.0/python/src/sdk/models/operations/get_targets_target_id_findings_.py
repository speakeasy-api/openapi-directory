import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import findingseverity_enum as shared_findingseverity_enum
from ..shared import findingstate_enum as shared_findingstate_enum
from ..shared import finding as shared_finding


@dataclasses.dataclass
class GetTargetsTargetIDFindingsPathParams:
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTargetsTargetIDFindingsQueryParams:
    assignee: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'assignee', 'style': 'form', 'explode': True }})
    label: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'label', 'style': 'form', 'explode': True }})
    length: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'length', 'style': 'form', 'explode': True }})
    ordering: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ordering', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    scan: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'scan', 'style': 'form', 'explode': True }})
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    severity: Optional[shared_findingseverity_enum.FindingSeverityEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'severity', 'style': 'form', 'explode': True }})
    state: Optional[shared_findingstate_enum.FindingStateEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDFindings200ApplicationJSON:
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_total: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_total') }})
    results: Optional[list[shared_finding.Finding]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDFindings401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDFindings404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class GetTargetsTargetIDFindingsRequest:
    path_params: GetTargetsTargetIDFindingsPathParams = dataclasses.field()
    query_params: GetTargetsTargetIDFindingsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTargetsTargetIDFindingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_targets_target_id_findings_200_application_json_object: Optional[GetTargetsTargetIDFindings200ApplicationJSON] = dataclasses.field(default=None)
    get_targets_target_id_findings_401_application_json_object: Optional[GetTargetsTargetIDFindings401ApplicationJSON] = dataclasses.field(default=None)
    get_targets_target_id_findings_404_application_json_object: Optional[GetTargetsTargetIDFindings404ApplicationJSON] = dataclasses.field(default=None)
    
