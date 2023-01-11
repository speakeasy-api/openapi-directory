import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import media as shared_media


@dataclasses.dataclass
class GetTeamSocialMediaPathParams:
    team_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamSocialMediaHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamSocialMediaSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetTeamSocialMediaRequest:
    headers: GetTeamSocialMediaHeaders = dataclasses.field()
    path_params: GetTeamSocialMediaPathParams = dataclasses.field()
    security: GetTeamSocialMediaSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTeamSocialMediaResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    media: Optional[list[shared_media.Media]] = dataclasses.field(default=None)
    
