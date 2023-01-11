import dataclasses
from typing import Optional
from enum import Enum

class AreGamesInProgressFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class AreGamesInProgressPathParams:
    format: AreGamesInProgressFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AreGamesInProgressRequest:
    path_params: AreGamesInProgressPathParams = dataclasses.field()
    

@dataclasses.dataclass
class AreGamesInProgressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    are_games_in_progress_200_application_json_boolean: Optional[bool] = dataclasses.field(default=None)
    
