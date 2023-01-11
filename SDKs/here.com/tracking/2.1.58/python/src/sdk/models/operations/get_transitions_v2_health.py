import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetTransitionsV2Health200ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetTransitionsV2HealthResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_transitions_v2_health_200_application_json_object: Optional[GetTransitionsV2Health200ApplicationJSON] = dataclasses.field(default=None)
    
