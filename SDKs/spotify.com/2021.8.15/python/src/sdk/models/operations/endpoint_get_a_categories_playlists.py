import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errorresponseobject as shared_errorresponseobject
from ..shared import playlistpagingobject as shared_playlistpagingobject


@dataclasses.dataclass
class EndpointGetACategoriesPlaylistsPathParams:
    category_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'category_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetACategoriesPlaylistsQueryParams:
    country: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EndpointGetACategoriesPlaylistsHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetACategoriesPlaylistsSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointGetACategoriesPlaylistsRequest:
    headers: EndpointGetACategoriesPlaylistsHeaders = dataclasses.field()
    path_params: EndpointGetACategoriesPlaylistsPathParams = dataclasses.field()
    query_params: EndpointGetACategoriesPlaylistsQueryParams = dataclasses.field()
    security: EndpointGetACategoriesPlaylistsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointGetACategoriesPlaylistsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    playlist_paging_object: Optional[shared_playlistpagingobject.PlaylistPagingObject] = dataclasses.field(default=None)
    
