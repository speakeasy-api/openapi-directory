import dataclasses
from typing import Optional
from enum import Enum

class PostGeomarksCopyBufferCapEnum(str, Enum):
    ROUND = "ROUND"
    SQUARE = "SQUARE"
    FLAT = "FLAT"

class PostGeomarksCopyBufferJoinEnum(str, Enum):
    ROUND = "ROUND"
    MITRE = "MITRE"
    BEVEL = "BEVEL"

class PostGeomarksCopyResultFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    KML = "kml"
    KMZ = "kmz"
    SHP = "shp"
    SHPZ = "shpz"
    GEOJSON = "geojson"
    GML = "gml"
    WKT = "wkt"


@dataclasses.dataclass
class PostGeomarksCopyQueryParams:
    geomark_url: str = dataclasses.field(metadata={'query_param': { 'field_name': 'geomarkUrl', 'style': 'form', 'explode': True }})
    allow_overlap: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'allowOverlap', 'style': 'form', 'explode': True }})
    buffer_cap: Optional[PostGeomarksCopyBufferCapEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'bufferCap', 'style': 'form', 'explode': True }})
    buffer_join: Optional[PostGeomarksCopyBufferJoinEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'bufferJoin', 'style': 'form', 'explode': True }})
    buffer_metres: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'bufferMetres', 'style': 'form', 'explode': True }})
    buffer_mitre_limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'bufferMitreLimit', 'style': 'form', 'explode': True }})
    buffer_segments: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'bufferSegments', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    failure_redirect_url: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'failureRedirectUrl', 'style': 'form', 'explode': True }})
    redirect_url: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'redirectUrl', 'style': 'form', 'explode': True }})
    result_format: Optional[PostGeomarksCopyResultFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'resultFormat', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostGeomarksCopyRequest:
    query_params: PostGeomarksCopyQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostGeomarksCopyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
