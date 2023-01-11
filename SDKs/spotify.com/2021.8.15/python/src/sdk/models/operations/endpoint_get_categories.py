import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import categoriesobject as shared_categoriesobject
from ..shared import errorresponseobject as shared_errorresponseobject


@dataclasses.dataclass
class EndpointGetCategoriesQueryParams:
    country: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    locale: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EndpointGetCategoriesHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetCategoriesSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointGetCategoriesRequest:
    headers: EndpointGetCategoriesHeaders = dataclasses.field()
    query_params: EndpointGetCategoriesQueryParams = dataclasses.field()
    security: EndpointGetCategoriesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointGetCategoriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    categories_object: Optional[shared_categoriesobject.CategoriesObject] = dataclasses.field(default=None)
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    
