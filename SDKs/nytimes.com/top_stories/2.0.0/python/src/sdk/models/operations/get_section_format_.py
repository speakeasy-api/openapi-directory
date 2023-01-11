import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import article as shared_article

class GetSectionFormatFormatEnum(str, Enum):
    JSON = "json"
    JSONP = "jsonp"

class GetSectionFormatSectionEnum(str, Enum):
    HOME = "home"
    OPINION = "opinion"
    WORLD = "world"
    NATIONAL = "national"
    POLITICS = "politics"
    UPSHOT = "upshot"
    NYREGION = "nyregion"
    BUSINESS = "business"
    TECHNOLOGY = "technology"
    SCIENCE = "science"
    HEALTH = "health"
    SPORTS = "sports"
    ARTS = "arts"
    BOOKS = "books"
    MOVIES = "movies"
    THEATER = "theater"
    SUNDAYREVIEW = "sundayreview"
    FASHION = "fashion"
    TMAGAZINE = "tmagazine"
    FOOD = "food"
    TRAVEL = "travel"
    MAGAZINE = "magazine"
    REALESTATE = "realestate"
    AUTOMOBILES = "automobiles"
    OBITUARIES = "obituaries"
    INSIDER = "insider"


@dataclasses.dataclass
class GetSectionFormatPathParams:
    format: GetSectionFormatFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    section: GetSectionFormatSectionEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'section', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSectionFormatQueryParams:
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetSectionFormat200ApplicationJSON:
    results: Optional[list[shared_article.Article]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclasses.dataclass
class GetSectionFormatRequest:
    path_params: GetSectionFormatPathParams = dataclasses.field()
    query_params: GetSectionFormatQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSectionFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_section_format_200_application_json_object: Optional[GetSectionFormat200ApplicationJSON] = dataclasses.field(default=None)
    
