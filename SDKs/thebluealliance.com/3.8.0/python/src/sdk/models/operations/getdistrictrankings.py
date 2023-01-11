import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import district_ranking as shared_district_ranking


@dataclasses.dataclass
class GetDistrictRankingsPathParams:
    district_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'district_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDistrictRankingsHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDistrictRankingsSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetDistrictRankingsRequest:
    headers: GetDistrictRankingsHeaders = dataclasses.field()
    path_params: GetDistrictRankingsPathParams = dataclasses.field()
    security: GetDistrictRankingsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetDistrictRankingsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    district_rankings: Optional[list[shared_district_ranking.DistrictRanking]] = dataclasses.field(default=None)
    
