import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import award as shared_award


@dataclasses.dataclass
class GetEventAwardsPathParams:
    event_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventAwardsHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventAwardsSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetEventAwardsRequest:
    headers: GetEventAwardsHeaders = dataclasses.field()
    path_params: GetEventAwardsPathParams = dataclasses.field()
    security: GetEventAwardsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetEventAwardsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    awards: Optional[list[shared_award.Award]] = dataclasses.field(default=None)
    
