import dataclasses
from typing import Optional
from enum import Enum

class GetGeomarksGeomarkIDFeatureFileFormatExtensionFileFormatExtensionEnum(str, Enum):
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
class GetGeomarksGeomarkIDFeatureFileFormatExtensionPathParams:
    file_format_extension: GetGeomarksGeomarkIDFeatureFileFormatExtensionFileFormatExtensionEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'fileFormatExtension', 'style': 'simple', 'explode': False }})
    geomark_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'geomarkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGeomarksGeomarkIDFeatureFileFormatExtensionQueryParams:
    srid: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'srid', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGeomarksGeomarkIDFeatureFileFormatExtensionRequest:
    path_params: GetGeomarksGeomarkIDFeatureFileFormatExtensionPathParams = dataclasses.field()
    query_params: GetGeomarksGeomarkIDFeatureFileFormatExtensionQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGeomarksGeomarkIDFeatureFileFormatExtensionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
