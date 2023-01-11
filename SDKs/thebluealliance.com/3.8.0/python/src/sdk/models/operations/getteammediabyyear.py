import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import media as shared_media


@dataclasses.dataclass
class GetTeamMediaByYearPathParams:
    team_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    year: int = dataclasses.field(metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamMediaByYearHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamMediaByYearSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetTeamMediaByYearRequest:
    headers: GetTeamMediaByYearHeaders = dataclasses.field()
    path_params: GetTeamMediaByYearPathParams = dataclasses.field()
    security: GetTeamMediaByYearSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTeamMediaByYearResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    media: Optional[list[shared_media.Media]] = dataclasses.field(default=None)
    
