import dataclasses
from typing import Any,Optional
from enum import Enum

class BoxScoreByScoreidVFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class BoxScoreByScoreidVPathParams:
    format: BoxScoreByScoreidVFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    scoreid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'scoreid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BoxScoreByScoreidVRequest:
    path_params: BoxScoreByScoreidVPathParams = dataclasses.field()
    

@dataclasses.dataclass
class BoxScoreByScoreidVResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    box_score_v3: Optional[Any] = dataclasses.field(default=None)
    
