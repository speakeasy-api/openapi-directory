import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scheduled as shared_scheduled


@dataclasses.dataclass
class GetTargetsAllScheduledscansExpandedQueryParams:
    length: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'length', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsAllScheduledscansExpanded200ApplicationJSON:
    results: Optional[list[shared_scheduled.Scheduled]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsAllScheduledscansExpanded404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class GetTargetsAllScheduledscansExpandedRequest:
    query_params: GetTargetsAllScheduledscansExpandedQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTargetsAllScheduledscansExpandedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_targets_all_scheduledscans_expanded_200_application_json_object: Optional[GetTargetsAllScheduledscansExpanded200ApplicationJSON] = dataclasses.field(default=None)
    get_targets_all_scheduledscans_expanded_404_application_json_object: Optional[GetTargetsAllScheduledscansExpanded404ApplicationJSON] = dataclasses.field(default=None)
    
