import dataclasses
from typing import Optional
from ..shared import getregionsresponse as shared_getregionsresponse


@dataclasses.dataclass
class GetRegionsHeaders:
    x_listen_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRegionsRequest:
    headers: GetRegionsHeaders = dataclasses.field()
    

@dataclasses.dataclass
class GetRegionsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_regions_response: Optional[shared_getregionsresponse.GetRegionsResponse] = dataclasses.field(default=None)
    
