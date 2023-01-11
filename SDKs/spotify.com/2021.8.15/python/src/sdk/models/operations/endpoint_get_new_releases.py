import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errorresponseobject as shared_errorresponseobject
from ..shared import newreleasesobject as shared_newreleasesobject


@dataclasses.dataclass
class EndpointGetNewReleasesQueryParams:
    country: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EndpointGetNewReleasesHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetNewReleasesSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointGetNewReleasesRequest:
    headers: EndpointGetNewReleasesHeaders = dataclasses.field()
    query_params: EndpointGetNewReleasesQueryParams = dataclasses.field()
    security: EndpointGetNewReleasesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointGetNewReleasesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    new_releases_object: Optional[shared_newreleasesobject.NewReleasesObject] = dataclasses.field(default=None)
    
