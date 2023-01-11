import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetTeamsByYearKeysPathParams:
    page_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'page_num', 'style': 'simple', 'explode': False }})
    year: int = dataclasses.field(metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamsByYearKeysHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamsByYearKeysSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetTeamsByYearKeysRequest:
    headers: GetTeamsByYearKeysHeaders = dataclasses.field()
    path_params: GetTeamsByYearKeysPathParams = dataclasses.field()
    security: GetTeamsByYearKeysSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTeamsByYearKeysResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_teams_by_year_keys_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
