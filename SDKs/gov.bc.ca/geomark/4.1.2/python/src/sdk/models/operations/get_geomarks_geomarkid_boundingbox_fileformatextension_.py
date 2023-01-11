import dataclasses
from typing import Optional
from enum import Enum

class GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionFileFormatExtensionEnum(str, Enum):
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
class GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionPathParams:
    file_format_extension: GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionFileFormatExtensionEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'fileFormatExtension', 'style': 'simple', 'explode': False }})
    geomark_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'geomarkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionQueryParams:
    srid: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'srid', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionRequest:
    path_params: GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionPathParams = dataclasses.field()
    query_params: GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
