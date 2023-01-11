import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetEventPredictionsPathParams:
    event_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventPredictionsHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventPredictionsSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetEventPredictionsRequest:
    headers: GetEventPredictionsHeaders = dataclasses.field()
    path_params: GetEventPredictionsPathParams = dataclasses.field()
    security: GetEventPredictionsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetEventPredictionsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    event_predictions: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
