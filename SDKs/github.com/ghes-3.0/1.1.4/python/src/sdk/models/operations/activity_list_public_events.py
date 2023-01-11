import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import event as shared_event


@dataclasses.dataclass
class ActivityListPublicEventsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ActivityListPublicEvents503ApplicationJSON:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    documentation_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class ActivityListPublicEventsRequest:
    query_params: ActivityListPublicEventsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ActivityListPublicEventsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    activity_list_public_events_503_application_json_object: Optional[ActivityListPublicEvents503ApplicationJSON] = dataclasses.field(default=None)
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    events: Optional[list[shared_event.Event]] = dataclasses.field(default=None)
    
