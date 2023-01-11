import dataclasses
from typing import Optional
from enum import Enum
from ..shared import language_enum as shared_language_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import videosearchresults as shared_videosearchresults

class GetV2CvSimilarVideosLicenseEnum(str, Enum):
    COMMERCIAL = "commercial"
    EDITORIAL = "editorial"

class GetV2CvSimilarVideosViewEnum(str, Enum):
    MINIMAL = "minimal"
    FULL = "full"


@dataclasses.dataclass
class GetV2CvSimilarVideosQueryParams:
    asset_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'asset_id', 'style': 'form', 'explode': True }})
    language: Optional[shared_language_enum.LanguageEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    license: Optional[list[GetV2CvSimilarVideosLicenseEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    safe: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'safe', 'style': 'form', 'explode': True }})
    view: Optional[GetV2CvSimilarVideosViewEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetV2CvSimilarVideosSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetV2CvSimilarVideosRequest:
    query_params: GetV2CvSimilarVideosQueryParams = dataclasses.field()
    security: GetV2CvSimilarVideosSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetV2CvSimilarVideosResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    video_search_results: Optional[shared_videosearchresults.VideoSearchResults] = dataclasses.field(default=None)
    
