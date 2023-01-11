import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import event_ranking as shared_event_ranking


@dataclasses.dataclass
class GetEventRankingsPathParams:
    event_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventRankingsHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventRankingsSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetEventRankingsRequest:
    headers: GetEventRankingsHeaders = dataclasses.field()
    path_params: GetEventRankingsPathParams = dataclasses.field()
    security: GetEventRankingsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetEventRankingsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    event_ranking: Optional[shared_event_ranking.EventRanking] = dataclasses.field(default=None)
    
