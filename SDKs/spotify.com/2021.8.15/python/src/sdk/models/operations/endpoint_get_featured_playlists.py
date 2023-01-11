import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errorresponseobject as shared_errorresponseobject
from ..shared import featuredplaylistobject as shared_featuredplaylistobject


@dataclasses.dataclass
class EndpointGetFeaturedPlaylistsQueryParams:
    country: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    locale: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    timestamp: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EndpointGetFeaturedPlaylistsHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetFeaturedPlaylistsSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointGetFeaturedPlaylistsRequest:
    headers: EndpointGetFeaturedPlaylistsHeaders = dataclasses.field()
    query_params: EndpointGetFeaturedPlaylistsQueryParams = dataclasses.field()
    security: EndpointGetFeaturedPlaylistsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointGetFeaturedPlaylistsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    featured_playlist_object: Optional[shared_featuredplaylistobject.FeaturedPlaylistObject] = dataclasses.field(default=None)
    
