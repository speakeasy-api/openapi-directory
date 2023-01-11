import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetAPIV2PredictionsHeaders:
    x_rapid_api_key: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-RapidApi-Key', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetAPIV2Predictions404ApplicationJSON:
    errors: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclasses.dataclass
class GetAPIV2PredictionsRequest:
    headers: GetAPIV2PredictionsHeaders = dataclasses.field()
    

@dataclasses.dataclass
class GetAPIV2PredictionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_api_v2_predictions_404_application_json_object: Optional[GetAPIV2Predictions404ApplicationJSON] = dataclasses.field(default=None)
    
