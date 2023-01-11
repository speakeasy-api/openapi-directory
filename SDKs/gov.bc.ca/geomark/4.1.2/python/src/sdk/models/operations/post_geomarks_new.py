import dataclasses
from typing import Optional
from enum import Enum

class PostGeomarksNewRequestBodyBufferCapEnum(str, Enum):
    ROUND = "ROUND"
    SQUARE = "SQUARE"
    FLAT = "FLAT"

class PostGeomarksNewRequestBodyBufferJoinEnum(str, Enum):
    ROUND = "ROUND"
    MITRE = "MITRE"
    BEVEL = "BEVEL"

class PostGeomarksNewRequestBodyFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    KML = "kml"
    KMZ = "kmz"
    SHP = "shp"
    SHPZ = "shpz"
    GEOJSON = "geojson"
    GML = "gml"
    WKT = "wkt"

class PostGeomarksNewRequestBodyResultFormatEnum(str, Enum):
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
class PostGeomarksNewRequestBody:
    allow_overlap: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'allowOverlap' }})
    body: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'body' }})
    buffer_cap: Optional[PostGeomarksNewRequestBodyBufferCapEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'bufferCap' }})
    buffer_join: Optional[PostGeomarksNewRequestBodyBufferJoinEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'bufferJoin' }})
    buffer_metres: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'bufferMetres' }})
    buffer_mitre_limit: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'bufferMitreLimit' }})
    buffer_segments: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'bufferSegments' }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'callback' }})
    failure_redirect_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'failureRedirectUrl' }})
    format: Optional[PostGeomarksNewRequestBodyFormatEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'format' }})
    multiple: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'multiple' }})
    redirect_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'redirectUrl' }})
    result_format: Optional[PostGeomarksNewRequestBodyResultFormatEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'resultFormat' }})
    srid: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'srid' }})
    

@dataclasses.dataclass
class PostGeomarksNewRequest:
    request: Optional[PostGeomarksNewRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class PostGeomarksNewResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
