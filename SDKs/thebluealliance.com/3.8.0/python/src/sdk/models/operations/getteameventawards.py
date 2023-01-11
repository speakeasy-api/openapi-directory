import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import award as shared_award


@dataclasses.dataclass
class GetTeamEventAwardsPathParams:
    event_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    team_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamEventAwardsHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamEventAwardsSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetTeamEventAwardsRequest:
    headers: GetTeamEventAwardsHeaders = dataclasses.field()
    path_params: GetTeamEventAwardsPathParams = dataclasses.field()
    security: GetTeamEventAwardsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTeamEventAwardsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    awards: Optional[list[shared_award.Award]] = dataclasses.field(default=None)
    
