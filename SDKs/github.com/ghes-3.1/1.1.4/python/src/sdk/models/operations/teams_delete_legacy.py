import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class TeamsDeleteLegacyPathParams:
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsDeleteLegacyRequest:
    path_params: TeamsDeleteLegacyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsDeleteLegacyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
