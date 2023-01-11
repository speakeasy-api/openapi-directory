import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import event as shared_event


@dataclasses.dataclass
class GetTargetsTargetIDEventsPathParams:
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDEvents200ApplicationJSON:
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_total: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_total') }})
    results: Optional[list[shared_event.Event]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDEvents401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDEvents403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDEvents404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class GetTargetsTargetIDEventsRequest:
    path_params: GetTargetsTargetIDEventsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTargetsTargetIDEventsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_targets_target_id_events_200_application_json_object: Optional[GetTargetsTargetIDEvents200ApplicationJSON] = dataclasses.field(default=None)
    get_targets_target_id_events_401_application_json_object: Optional[GetTargetsTargetIDEvents401ApplicationJSON] = dataclasses.field(default=None)
    get_targets_target_id_events_403_application_json_object: Optional[GetTargetsTargetIDEvents403ApplicationJSON] = dataclasses.field(default=None)
    get_targets_target_id_events_404_application_json_object: Optional[GetTargetsTargetIDEvents404ApplicationJSON] = dataclasses.field(default=None)
    
