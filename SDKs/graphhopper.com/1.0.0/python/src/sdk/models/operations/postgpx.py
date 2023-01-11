import dataclasses
from typing import Optional
from ..shared import gherror as shared_gherror
from ..shared import routeresponse as shared_routeresponse


@dataclasses.dataclass
class PostGpxQueryParams:
    gps_accuracy: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'gps_accuracy', 'style': 'form', 'explode': True }})
    vehicle: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'vehicle', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostGpxRequest:
    query_params: PostGpxQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostGpxResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    gh_error: Optional[shared_gherror.GhError] = dataclasses.field(default=None)
    route_response: Optional[shared_routeresponse.RouteResponse] = dataclasses.field(default=None)
    
