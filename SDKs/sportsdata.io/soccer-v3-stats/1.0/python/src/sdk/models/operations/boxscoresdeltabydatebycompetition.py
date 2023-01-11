import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum

class BoxScoresDeltaByDateByCompetitionFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclasses.dataclass
class BoxScoresDeltaByDateByCompetitionPathParams:
    competition: str = dataclasses.field(metadata={'path_param': { 'field_name': 'competition', 'style': 'simple', 'explode': False }})
    date_: str = dataclasses.field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: BoxScoresDeltaByDateByCompetitionFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    minutes: str = dataclasses.field(metadata={'path_param': { 'field_name': 'minutes', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BoxScoresDeltaByDateByCompetitionRequest:
    path_params: BoxScoresDeltaByDateByCompetitionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class BoxScoresDeltaByDateByCompetitionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    box_scores: Optional[list[Any]] = dataclasses.field(default=None)
    
