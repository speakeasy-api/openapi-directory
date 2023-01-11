import dataclasses
from typing import Optional
from enum import Enum

class GetNamesDecisionsRecentOutputFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    KML = "kml"
    CSV = "csv"

class GetNamesDecisionsRecentOutputStyleEnum(str, Enum):
    SUMMARY = "summary"
    DETAIL = "detail"

class GetNamesDecisionsRecentSortByEnum(str, Enum):
    NAME = "name"
    FEATURE_TYPE = "featureType"
    DECISION_DATE = "decisionDate"


@dataclasses.dataclass
class GetNamesDecisionsRecentQueryParams:
    days: int = dataclasses.field(metadata={'query_param': { 'field_name': 'days', 'style': 'form', 'explode': True }})
    output_format: GetNamesDecisionsRecentOutputFormatEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'outputFormat', 'style': 'form', 'explode': True }})
    embed: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'embed', 'style': 'form', 'explode': True }})
    feature_category: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'featureCategory', 'style': 'form', 'explode': True }})
    feature_class: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'featureClass', 'style': 'form', 'explode': True }})
    feature_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'featureType', 'style': 'form', 'explode': True }})
    items_per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'itemsPerPage', 'style': 'form', 'explode': True }})
    output_srs: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'outputSRS', 'style': 'form', 'explode': True }})
    output_style: Optional[GetNamesDecisionsRecentOutputStyleEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'outputStyle', 'style': 'form', 'explode': True }})
    sort_by: Optional[GetNamesDecisionsRecentSortByEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sortBy', 'style': 'form', 'explode': True }})
    start_index: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startIndex', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNamesDecisionsRecentRequest:
    query_params: GetNamesDecisionsRecentQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNamesDecisionsRecentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
