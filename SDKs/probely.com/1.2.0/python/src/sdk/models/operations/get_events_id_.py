import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import event as shared_event


@dataclasses.dataclass
class GetEventsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetEventsID401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetEventsID403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetEventsID404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class GetEventsIDRequest:
    path_params: GetEventsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEventsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    event: Optional[shared_event.Event] = dataclasses.field(default=None)
    get_events_id_401_application_json_object: Optional[GetEventsID401ApplicationJSON] = dataclasses.field(default=None)
    get_events_id_403_application_json_object: Optional[GetEventsID403ApplicationJSON] = dataclasses.field(default=None)
    get_events_id_404_application_json_object: Optional[GetEventsID404ApplicationJSON] = dataclasses.field(default=None)
    
