import dataclasses
from typing import Optional
from enum import Enum

class GetIntersectionsIntersectionIDOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    GEOJSON = "geojson"
    XHTML = "xhtml"
    KML = "kml"
    GML = "gml"
    CSV = "csv"
    SHPZ = "shpz"


@dataclasses.dataclass
class GetIntersectionsIntersectionIDOutputFormatPathParams:
    intersection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'intersectionID', 'style': 'simple', 'explode': False }})
    output_format: GetIntersectionsIntersectionIDOutputFormatOutputFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'outputFormat', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetIntersectionsIntersectionIDOutputFormatQueryParams:
    output_srs: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'outputSRS', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetIntersectionsIntersectionIDOutputFormatRequest:
    path_params: GetIntersectionsIntersectionIDOutputFormatPathParams = dataclasses.field()
    query_params: GetIntersectionsIntersectionIDOutputFormatQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetIntersectionsIntersectionIDOutputFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
