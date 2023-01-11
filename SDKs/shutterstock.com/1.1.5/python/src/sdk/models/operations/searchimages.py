import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import language_enum as shared_language_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import imagesearchresults as shared_imagesearchresults

class SearchImagesImageTypeEnum(str, Enum):
    PHOTO = "photo"
    ILLUSTRATION = "illustration"
    VECTOR = "vector"

class SearchImagesLicenseEnum(str, Enum):
    COMMERCIAL = "commercial"
    EDITORIAL = "editorial"
    ENHANCED = "enhanced"

class SearchImagesOrientationEnum(str, Enum):
    HORIZONTAL = "horizontal"
    VERTICAL = "vertical"

class SearchImagesPeopleAgeEnum(str, Enum):
    INFANTS = "infants"
    CHILDREN = "children"
    TEENAGERS = "teenagers"
    TWENTYS = "20s"
    THIRTYS = "30s"
    FORTYS = "40s"
    FIFTYS = "50s"
    SIXTYS = "60s"
    OLDER = "older"

class SearchImagesPeopleEthnicityEnum(str, Enum):
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

class SearchImagesPeopleGenderEnum(str, Enum):
    MALE = "male"
    FEMALE = "female"
    BOTH = "both"

class SearchImagesSortEnum(str, Enum):
    NEWEST = "newest"
    POPULAR = "popular"
    RELEVANCE = "relevance"
    RANDOM = "random"

class SearchImagesViewEnum(str, Enum):
    MINIMAL = "minimal"
    FULL = "full"


@dataclasses.dataclass
class SearchImagesQueryParams:
    added_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'added_date', 'style': 'form', 'explode': True }})
    added_date_end: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'added_date_end', 'style': 'form', 'explode': True }})
    added_date_start: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'added_date_start', 'style': 'form', 'explode': True }})
    aspect_ratio: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'aspect_ratio', 'style': 'form', 'explode': True }})
    aspect_ratio_max: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'aspect_ratio_max', 'style': 'form', 'explode': True }})
    aspect_ratio_min: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'aspect_ratio_min', 'style': 'form', 'explode': True }})
    category: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    color: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'color', 'style': 'form', 'explode': True }})
    contributor: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'contributor', 'style': 'form', 'explode': True }})
    contributor_country: Optional[Any] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'contributor_country', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    height: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'height', 'style': 'form', 'explode': True }})
    height_from: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'height_from', 'style': 'form', 'explode': True }})
    height_to: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'height_to', 'style': 'form', 'explode': True }})
    image_type: Optional[list[SearchImagesImageTypeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'image_type', 'style': 'form', 'explode': True }})
    keyword_safe_search: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'keyword_safe_search', 'style': 'form', 'explode': True }})
    language: Optional[shared_language_enum.LanguageEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    license: Optional[list[SearchImagesLicenseEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    model: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'model', 'style': 'form', 'explode': True }})
    orientation: Optional[SearchImagesOrientationEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'orientation', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    people_age: Optional[SearchImagesPeopleAgeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'people_age', 'style': 'form', 'explode': True }})
    people_ethnicity: Optional[list[SearchImagesPeopleEthnicityEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'people_ethnicity', 'style': 'form', 'explode': True }})
    people_gender: Optional[SearchImagesPeopleGenderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'people_gender', 'style': 'form', 'explode': True }})
    people_model_released: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'people_model_released', 'style': 'form', 'explode': True }})
    people_number: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'people_number', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    region: Optional[Any] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'region', 'style': 'form', 'explode': True }})
    safe: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'safe', 'style': 'form', 'explode': True }})
    sort: Optional[SearchImagesSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    spellcheck_query: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'spellcheck_query', 'style': 'form', 'explode': True }})
    view: Optional[SearchImagesViewEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    width: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'width', 'style': 'form', 'explode': True }})
    width_from: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'width_from', 'style': 'form', 'explode': True }})
    width_to: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'width_to', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SearchImagesSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class SearchImagesRequest:
    query_params: SearchImagesQueryParams = dataclasses.field()
    security: SearchImagesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class SearchImagesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    image_search_results: Optional[shared_imagesearchresults.ImageSearchResults] = dataclasses.field(default=None)
    
