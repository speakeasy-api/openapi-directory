import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetSensorsV3Health200ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetSensorsV3HealthResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_sensors_v3_health_200_application_json_object: Optional[GetSensorsV3Health200ApplicationJSON] = dataclasses.field(default=None)
    
