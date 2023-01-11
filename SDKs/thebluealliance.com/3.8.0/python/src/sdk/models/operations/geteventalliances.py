import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import elimination_alliance as shared_elimination_alliance


@dataclasses.dataclass
class GetEventAlliancesPathParams:
    event_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventAlliancesHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventAlliancesSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetEventAlliancesRequest:
    headers: GetEventAlliancesHeaders = dataclasses.field()
    path_params: GetEventAlliancesPathParams = dataclasses.field()
    security: GetEventAlliancesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetEventAlliancesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    elimination_alliances: Optional[list[shared_elimination_alliance.EliminationAlliance]] = dataclasses.field(default=None)
    
