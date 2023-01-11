import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import media as shared_media


@dataclasses.dataclass
class GetTeamMediaByTagYearPathParams:
    media_tag: str = dataclasses.field(metadata={'path_param': { 'field_name': 'media_tag', 'style': 'simple', 'explode': False }})
    team_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    year: int = dataclasses.field(metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamMediaByTagYearHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamMediaByTagYearSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetTeamMediaByTagYearRequest:
    headers: GetTeamMediaByTagYearHeaders = dataclasses.field()
    path_params: GetTeamMediaByTagYearPathParams = dataclasses.field()
    security: GetTeamMediaByTagYearSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTeamMediaByTagYearResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    media: Optional[list[shared_media.Media]] = dataclasses.field(default=None)
    
