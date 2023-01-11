import dataclasses
from typing import Optional
from enum import Enum

class GetIntersectionsNearestOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    GEOJSON = "geojson"
    XHTML = "xhtml"
    KML = "kml"
    GML = "gml"
    CSV = "csv"
    SHPZ = "shpz"


@dataclasses.dataclass
class GetIntersectionsNearestOutputFormatPathParams:
    output_format: GetIntersectionsNearestOutputFormatOutputFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'outputFormat', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetIntersectionsNearestOutputFormatQueryParams:
    point: str = dataclasses.field(metadata={'query_param': { 'field_name': 'point', 'style': 'form', 'explode': True }})
    max_degree: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxDegree', 'style': 'form', 'explode': True }})
    max_distance: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxDistance', 'style': 'form', 'explode': True }})
    min_degree: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'minDegree', 'style': 'form', 'explode': True }})
    output_srs: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'outputSRS', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetIntersectionsNearestOutputFormatRequest:
    path_params: GetIntersectionsNearestOutputFormatPathParams = dataclasses.field()
    query_params: GetIntersectionsNearestOutputFormatQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetIntersectionsNearestOutputFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
