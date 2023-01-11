import dataclasses
from typing import Optional
from enum import Enum

class GetGeomarksGeomarkIDPartsFileFormatExtensionFileFormatExtensionEnum(str, Enum):
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
class GetGeomarksGeomarkIDPartsFileFormatExtensionPathParams:
    file_format_extension: GetGeomarksGeomarkIDPartsFileFormatExtensionFileFormatExtensionEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'fileFormatExtension', 'style': 'simple', 'explode': False }})
    geomark_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'geomarkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGeomarksGeomarkIDPartsFileFormatExtensionQueryParams:
    srid: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'srid', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGeomarksGeomarkIDPartsFileFormatExtensionRequest:
    path_params: GetGeomarksGeomarkIDPartsFileFormatExtensionPathParams = dataclasses.field()
    query_params: GetGeomarksGeomarkIDPartsFileFormatExtensionQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGeomarksGeomarkIDPartsFileFormatExtensionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
