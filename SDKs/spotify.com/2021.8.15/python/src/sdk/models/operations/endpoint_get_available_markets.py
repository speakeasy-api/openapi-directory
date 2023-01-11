import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errorresponseobject as shared_errorresponseobject
from ..shared import marketsobject as shared_marketsobject


@dataclasses.dataclass
class EndpointGetAvailableMarketsHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetAvailableMarketsSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointGetAvailableMarketsRequest:
    headers: EndpointGetAvailableMarketsHeaders = dataclasses.field()
    security: EndpointGetAvailableMarketsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointGetAvailableMarketsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    markets_object: Optional[shared_marketsobject.MarketsObject] = dataclasses.field(default=None)
    
