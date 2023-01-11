import dataclasses
from typing import Optional
from enum import Enum

class GetGeomarksGeomarkIDFileFormatExtensionFileFormatExtensionEnum(str, Enum):
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
class GetGeomarksGeomarkIDFileFormatExtensionPathParams:
    file_format_extension: GetGeomarksGeomarkIDFileFormatExtensionFileFormatExtensionEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'fileFormatExtension', 'style': 'simple', 'explode': False }})
    geomark_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'geomarkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGeomarksGeomarkIDFileFormatExtensionQueryParams:
    srid: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'srid', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGeomarksGeomarkIDFileFormatExtensionRequest:
    path_params: GetGeomarksGeomarkIDFileFormatExtensionPathParams = dataclasses.field()
    query_params: GetGeomarksGeomarkIDFileFormatExtensionQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGeomarksGeomarkIDFileFormatExtensionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
