import dataclasses
from typing import Optional
from enum import Enum

class GetNamesNotOfficialSearchOutputFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    KML = "kml"
    CSV = "csv"

class GetNamesNotOfficialSearchOutputStyleEnum(str, Enum):
    SUMMARY = "summary"
    DETAIL = "detail"

class GetNamesNotOfficialSearchSortByEnum(str, Enum):
    RELEVANCE = "relevance"
    NAME = "name"
    FEATURE_TYPE = "featureType"
    DECISION_DATE = "decisionDate"


@dataclasses.dataclass
class GetNamesNotOfficialSearchQueryParams:
    name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    output_format: GetNamesNotOfficialSearchOutputFormatEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'outputFormat', 'style': 'form', 'explode': True }})
    embed: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'embed', 'style': 'form', 'explode': True }})
    exact_spelling: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'exactSpelling', 'style': 'form', 'explode': True }})
    feature_category: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'featureCategory', 'style': 'form', 'explode': True }})
    feature_class: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'featureClass', 'style': 'form', 'explode': True }})
    feature_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'featureType', 'style': 'form', 'explode': True }})
    items_per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'itemsPerPage', 'style': 'form', 'explode': True }})
    output_srs: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'outputSRS', 'style': 'form', 'explode': True }})
    output_style: Optional[GetNamesNotOfficialSearchOutputStyleEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'outputStyle', 'style': 'form', 'explode': True }})
    sort_by: Optional[GetNamesNotOfficialSearchSortByEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sortBy', 'style': 'form', 'explode': True }})
    start_index: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startIndex', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNamesNotOfficialSearchRequest:
    query_params: GetNamesNotOfficialSearchQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNamesNotOfficialSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
