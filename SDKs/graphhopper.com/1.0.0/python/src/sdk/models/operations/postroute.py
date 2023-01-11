import dataclasses
from typing import Optional
from ..shared import routerequest as shared_routerequest
from ..shared import gherror as shared_gherror
from ..shared import routeresponse as shared_routeresponse


@dataclasses.dataclass
class PostRouteRequest:
    request: Optional[shared_routerequest.RouteRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostRouteResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    gh_error: Optional[shared_gherror.GhError] = dataclasses.field(default=None)
    route_response: Optional[shared_routeresponse.RouteResponse] = dataclasses.field(default=None)
    
