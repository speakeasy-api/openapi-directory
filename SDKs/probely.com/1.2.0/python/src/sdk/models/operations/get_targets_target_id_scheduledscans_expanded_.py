import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scheduled as shared_scheduled


@dataclasses.dataclass
class GetTargetsTargetIDScheduledscansExpandedPathParams:
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTargetsTargetIDScheduledscansExpandedQueryParams:
    length: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'length', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDScheduledscansExpanded200ApplicationJSON:
    results: Optional[list[shared_scheduled.Scheduled]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDScheduledscansExpanded404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class GetTargetsTargetIDScheduledscansExpandedRequest:
    path_params: GetTargetsTargetIDScheduledscansExpandedPathParams = dataclasses.field()
    query_params: GetTargetsTargetIDScheduledscansExpandedQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTargetsTargetIDScheduledscansExpandedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_targets_target_id_scheduledscans_expanded_200_application_json_object: Optional[GetTargetsTargetIDScheduledscansExpanded200ApplicationJSON] = dataclasses.field(default=None)
    get_targets_target_id_scheduledscans_expanded_404_application_json_object: Optional[GetTargetsTargetIDScheduledscansExpanded404ApplicationJSON] = dataclasses.field(default=None)
    
