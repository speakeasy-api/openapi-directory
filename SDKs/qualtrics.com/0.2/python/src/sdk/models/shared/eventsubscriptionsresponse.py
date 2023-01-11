import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class EventSubscriptionsResponseMeta:
    http_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpStatus') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    

@dataclass_json
@dataclasses.dataclass
class EventSubscriptionsResponseResultMeta:
    http_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpStatus') }})
    

@dataclass_json
@dataclasses.dataclass
class EventSubscriptionsResponseResultResult:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class EventSubscriptionsResponseResult:
    meta: Optional[EventSubscriptionsResponseResultMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    result: Optional[EventSubscriptionsResponseResultResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass_json
@dataclasses.dataclass
class EventSubscriptionsResponse:
    meta: Optional[EventSubscriptionsResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    result: Optional[EventSubscriptionsResponseResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    
