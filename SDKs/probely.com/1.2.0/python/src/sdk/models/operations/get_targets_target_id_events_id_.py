import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import event as shared_event


@dataclasses.dataclass
class GetTargetsTargetIDEventsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDEventsID401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDEventsID403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDEventsID404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class GetTargetsTargetIDEventsIDRequest:
    path_params: GetTargetsTargetIDEventsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTargetsTargetIDEventsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    event: Optional[shared_event.Event] = dataclasses.field(default=None)
    get_targets_target_id_events_id_401_application_json_object: Optional[GetTargetsTargetIDEventsID401ApplicationJSON] = dataclasses.field(default=None)
    get_targets_target_id_events_id_403_application_json_object: Optional[GetTargetsTargetIDEventsID403ApplicationJSON] = dataclasses.field(default=None)
    get_targets_target_id_events_id_404_application_json_object: Optional[GetTargetsTargetIDEventsID404ApplicationJSON] = dataclasses.field(default=None)
    
