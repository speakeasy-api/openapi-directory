import dataclasses
from typing import Optional
from enum import Enum

class GetIntersectionsWithinOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    GEOJSON = "geojson"
    XHTML = "xhtml"
    KML = "kml"
    GML = "gml"
    CSV = "csv"
    SHPZ = "shpz"


@dataclasses.dataclass
class GetIntersectionsWithinOutputFormatPathParams:
    output_format: GetIntersectionsWithinOutputFormatOutputFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'outputFormat', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetIntersectionsWithinOutputFormatQueryParams:
    bbox: str = dataclasses.field(metadata={'query_param': { 'field_name': 'bbox', 'style': 'form', 'explode': True }})
    max_degree: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxDegree', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    min_degree: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'minDegree', 'style': 'form', 'explode': True }})
    output_srs: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'outputSRS', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetIntersectionsWithinOutputFormatRequest:
    path_params: GetIntersectionsWithinOutputFormatPathParams = dataclasses.field()
    query_params: GetIntersectionsWithinOutputFormatQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetIntersectionsWithinOutputFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
