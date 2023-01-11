import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import categoryobject as shared_categoryobject
from ..shared import errorresponseobject as shared_errorresponseobject


@dataclasses.dataclass
class EndpointGetACategoryPathParams:
    category_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'category_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetACategoryQueryParams:
    country: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    locale: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EndpointGetACategoryHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetACategorySecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointGetACategoryRequest:
    headers: EndpointGetACategoryHeaders = dataclasses.field()
    path_params: EndpointGetACategoryPathParams = dataclasses.field()
    query_params: EndpointGetACategoryQueryParams = dataclasses.field()
    security: EndpointGetACategorySecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointGetACategoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    category_object: Optional[shared_categoryobject.CategoryObject] = dataclasses.field(default=None)
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    
