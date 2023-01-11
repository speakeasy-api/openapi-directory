import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import team as shared_team


@dataclasses.dataclass
class GetDistrictTeamsPathParams:
    district_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'district_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDistrictTeamsHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDistrictTeamsSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetDistrictTeamsRequest:
    headers: GetDistrictTeamsHeaders = dataclasses.field()
    path_params: GetDistrictTeamsPathParams = dataclasses.field()
    security: GetDistrictTeamsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetDistrictTeamsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    teams: Optional[list[shared_team.Team]] = dataclasses.field(default=None)
    
