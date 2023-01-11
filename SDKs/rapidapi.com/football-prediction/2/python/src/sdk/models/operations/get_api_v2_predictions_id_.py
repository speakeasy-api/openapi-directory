import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetAPIV2PredictionsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetAPIV2PredictionsID200ApplicationJSON:
    data: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAPIV2PredictionsID404ApplicationJSON:
    errors: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclasses.dataclass
class GetAPIV2PredictionsIDRequest:
    path_params: GetAPIV2PredictionsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAPIV2PredictionsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_api_v2_predictions_id_200_application_json_object: Optional[GetAPIV2PredictionsID200ApplicationJSON] = dataclasses.field(default=None)
    get_api_v2_predictions_id_404_application_json_object: Optional[GetAPIV2PredictionsID404ApplicationJSON] = dataclasses.field(default=None)
    
