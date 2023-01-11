import dataclasses
from typing import Optional
from enum import Enum

class GetIntersectionsNearOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    GEOJSON = "geojson"
    XHTML = "xhtml"
    KML = "kml"
    GML = "gml"
    CSV = "csv"
    SHPZ = "shpz"


@dataclasses.dataclass
class GetIntersectionsNearOutputFormatPathParams:
    output_format: GetIntersectionsNearOutputFormatOutputFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'outputFormat', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetIntersectionsNearOutputFormatQueryParams:
    output_srs: int = dataclasses.field(metadata={'query_param': { 'field_name': 'outputSRS', 'style': 'form', 'explode': True }})
    point: str = dataclasses.field(metadata={'query_param': { 'field_name': 'point', 'style': 'form', 'explode': True }})
    max_degree: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxDegree', 'style': 'form', 'explode': True }})
    max_distance: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxDistance', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    min_degree: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'minDegree', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetIntersectionsNearOutputFormatRequest:
    path_params: GetIntersectionsNearOutputFormatPathParams = dataclasses.field()
    query_params: GetIntersectionsNearOutputFormatQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetIntersectionsNearOutputFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
