import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errorresponseobject as shared_errorresponseobject
from ..shared import genreseedsobject as shared_genreseedsobject


@dataclasses.dataclass
class EndpointGetRecommendationGenresHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetRecommendationGenresSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointGetRecommendationGenresRequest:
    headers: EndpointGetRecommendationGenresHeaders = dataclasses.field()
    security: EndpointGetRecommendationGenresSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointGetRecommendationGenresResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    genre_seeds_object: Optional[shared_genreseedsobject.GenreSeedsObject] = dataclasses.field(default=None)
    
