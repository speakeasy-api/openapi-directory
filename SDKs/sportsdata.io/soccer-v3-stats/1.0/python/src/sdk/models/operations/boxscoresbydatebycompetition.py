import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum

class BoxScoresByDateByCompetitionFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclasses.dataclass
class BoxScoresByDateByCompetitionPathParams:
    competition: str = dataclasses.field(metadata={'path_param': { 'field_name': 'competition', 'style': 'simple', 'explode': False }})
    date_: str = dataclasses.field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: BoxScoresByDateByCompetitionFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BoxScoresByDateByCompetitionRequest:
    path_params: BoxScoresByDateByCompetitionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class BoxScoresByDateByCompetitionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    box_scores: Optional[list[Any]] = dataclasses.field(default=None)
    
