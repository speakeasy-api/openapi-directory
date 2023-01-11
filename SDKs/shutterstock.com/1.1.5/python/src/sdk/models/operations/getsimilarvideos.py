import dataclasses
from typing import Optional
from enum import Enum
from ..shared import language_enum as shared_language_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import videosearchresults as shared_videosearchresults


@dataclasses.dataclass
class GetSimilarVideosPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetSimilarVideosViewEnum(str, Enum):
    MINIMAL = "minimal"
    FULL = "full"


@dataclasses.dataclass
class GetSimilarVideosQueryParams:
    language: Optional[shared_language_enum.LanguageEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    view: Optional[GetSimilarVideosViewEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSimilarVideosSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetSimilarVideosRequest:
    path_params: GetSimilarVideosPathParams = dataclasses.field()
    query_params: GetSimilarVideosQueryParams = dataclasses.field()
    security: GetSimilarVideosSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetSimilarVideosResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    video_search_results: Optional[shared_videosearchresults.VideoSearchResults] = dataclasses.field(default=None)
    
