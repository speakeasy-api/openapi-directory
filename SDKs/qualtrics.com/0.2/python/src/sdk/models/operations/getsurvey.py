import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetSurveyPathParams:
    survey_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'SurveyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSurveyRequest:
    path_params: GetSurveyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSurveyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    survey_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
