import dataclasses
from typing import Optional
from enum import Enum

class GetGeomarksGeomarkIDPointFileFormatExtensionFileFormatExtensionEnum(str, Enum):
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
class GetGeomarksGeomarkIDPointFileFormatExtensionPathParams:
    file_format_extension: GetGeomarksGeomarkIDPointFileFormatExtensionFileFormatExtensionEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'fileFormatExtension', 'style': 'simple', 'explode': False }})
    geomark_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'geomarkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGeomarksGeomarkIDPointFileFormatExtensionQueryParams:
    srid: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'srid', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGeomarksGeomarkIDPointFileFormatExtensionRequest:
    path_params: GetGeomarksGeomarkIDPointFileFormatExtensionPathParams = dataclasses.field()
    query_params: GetGeomarksGeomarkIDPointFileFormatExtensionQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGeomarksGeomarkIDPointFileFormatExtensionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
