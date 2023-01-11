import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import language_enum as shared_language_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import videosearchresults as shared_videosearchresults

class SearchVideosAspectRatioEnum(str, Enum):
    FOUR_3 = "4_3"
    SIXTEEN_9 = "16_9"
    NONSTANDARD = "nonstandard"

class SearchVideosLicenseEnum(str, Enum):
    COMMERCIAL = "commercial"
    EDITORIAL = "editorial"

class SearchVideosPeopleAgeEnum(str, Enum):
    INFANTS = "infants"
    CHILDREN = "children"
    TEENAGERS = "teenagers"
    TWENTYS = "20s"
    THIRTYS = "30s"
    FORTYS = "40s"
    FIFTYS = "50s"
    SIXTYS = "60s"
    OLDER = "older"

class SearchVideosPeopleEthnicityEnum(str, Enum):
    AFRICAN = "african"
    AFRICAN_AMERICAN = "african_american"
    BLACK = "black"
    BRAZILIAN = "brazilian"
    CHINESE = "chinese"
    CAUCASIAN = "caucasian"
    EAST_ASIAN = "east_asian"
    HISPANIC = "hispanic"
    JAPANESE = "japanese"
    MIDDLE_EASTERN = "middle_eastern"
    NATIVE_AMERICAN = "native_american"
    PACIFIC_ISLANDER = "pacific_islander"
    SOUTH_ASIAN = "south_asian"
    SOUTHEAST_ASIAN = "southeast_asian"
    OTHER = "other"

class SearchVideosPeopleGenderEnum(str, Enum):
    MALE = "male"
    FEMALE = "female"
    BOTH = "both"

class SearchVideosResolutionEnum(str, Enum):
    FOURK = "4k"
    STANDARD_DEFINITION = "standard_definition"
    HIGH_DEFINITION = "high_definition"

class SearchVideosSortEnum(str, Enum):
    NEWEST = "newest"
    POPULAR = "popular"
    RELEVANCE = "relevance"
    RANDOM = "random"

class SearchVideosViewEnum(str, Enum):
    MINIMAL = "minimal"
    FULL = "full"


@dataclasses.dataclass
class SearchVideosQueryParams:
    added_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'added_date', 'style': 'form', 'explode': True }})
    added_date_end: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'added_date_end', 'style': 'form', 'explode': True }})
    added_date_start: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'added_date_start', 'style': 'form', 'explode': True }})
    aspect_ratio: Optional[SearchVideosAspectRatioEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'aspect_ratio', 'style': 'form', 'explode': True }})
    category: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    contributor: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'contributor', 'style': 'form', 'explode': True }})
    contributor_country: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'contributor_country', 'style': 'form', 'explode': True }})
    duration: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'duration', 'style': 'form', 'explode': True }})
    duration_from: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'duration_from', 'style': 'form', 'explode': True }})
    duration_to: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'duration_to', 'style': 'form', 'explode': True }})
    fps: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fps', 'style': 'form', 'explode': True }})
    fps_from: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fps_from', 'style': 'form', 'explode': True }})
    fps_to: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fps_to', 'style': 'form', 'explode': True }})
    keyword_safe_search: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'keyword_safe_search', 'style': 'form', 'explode': True }})
    language: Optional[shared_language_enum.LanguageEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    license: Optional[list[SearchVideosLicenseEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    model: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'model', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    people_age: Optional[SearchVideosPeopleAgeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'people_age', 'style': 'form', 'explode': True }})
    people_ethnicity: Optional[list[SearchVideosPeopleEthnicityEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'people_ethnicity', 'style': 'form', 'explode': True }})
    people_gender: Optional[SearchVideosPeopleGenderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'people_gender', 'style': 'form', 'explode': True }})
    people_model_released: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'people_model_released', 'style': 'form', 'explode': True }})
    people_number: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'people_number', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    resolution: Optional[SearchVideosResolutionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'resolution', 'style': 'form', 'explode': True }})
    safe: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'safe', 'style': 'form', 'explode': True }})
    sort: Optional[SearchVideosSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    view: Optional[SearchVideosViewEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SearchVideosSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class SearchVideosRequest:
    query_params: SearchVideosQueryParams = dataclasses.field()
    security: SearchVideosSecurity = dataclasses.field()
    

@dataclasses.dataclass
class SearchVideosResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    video_search_results: Optional[shared_videosearchresults.VideoSearchResults] = dataclasses.field(default=None)
    
