import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetEventsV3Health200ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetEventsV3HealthResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_events_v3_health_200_application_json_object: Optional[GetEventsV3Health200ApplicationJSON] = dataclasses.field(default=None)
    
