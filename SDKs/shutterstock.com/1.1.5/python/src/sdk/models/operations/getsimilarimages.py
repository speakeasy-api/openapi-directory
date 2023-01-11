import dataclasses
from typing import Optional
from enum import Enum
from ..shared import language_enum as shared_language_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import imagesearchresults as shared_imagesearchresults


@dataclasses.dataclass
class GetSimilarImagesPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetSimilarImagesViewEnum(str, Enum):
    MINIMAL = "minimal"
    FULL = "full"


@dataclasses.dataclass
class GetSimilarImagesQueryParams:
    language: Optional[shared_language_enum.LanguageEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    view: Optional[GetSimilarImagesViewEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSimilarImagesSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetSimilarImagesRequest:
    path_params: GetSimilarImagesPathParams = dataclasses.field()
    query_params: GetSimilarImagesQueryParams = dataclasses.field()
    security: GetSimilarImagesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetSimilarImagesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    image_search_results: Optional[shared_imagesearchresults.ImageSearchResults] = dataclasses.field(default=None)
    
