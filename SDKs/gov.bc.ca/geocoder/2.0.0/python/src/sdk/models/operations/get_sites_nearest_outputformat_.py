import dataclasses
from typing import Optional
from enum import Enum

class GetSitesNearestOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    GEOJSON = "geojson"
    XHTML = "xhtml"
    KML = "kml"
    GML = "gml"
    CSV = "csv"
    SHPZ = "shpz"


@dataclasses.dataclass
class GetSitesNearestOutputFormatPathParams:
    output_format: GetSitesNearestOutputFormatOutputFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'outputFormat', 'style': 'simple', 'explode': False }})
    
class GetSitesNearestOutputFormatLocationDescriptorEnum(str, Enum):
    ANY = "any"
    ACCESS_POINT = "accessPoint"
    FRONT_DOOR_POINT = "frontDoorPoint"
    PARCEL_POINT = "parcelPoint"
    ROOFTOP_POINT = "rooftopPoint"
    ROUTING_POINT = "routingPoint"


@dataclasses.dataclass
class GetSitesNearestOutputFormatQueryParams:
    point: str = dataclasses.field(metadata={'query_param': { 'field_name': 'point', 'style': 'form', 'explode': True }})
    brief: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'brief', 'style': 'form', 'explode': True }})
    exclude_units: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'excludeUnits', 'style': 'form', 'explode': True }})
    location_descriptor: Optional[GetSitesNearestOutputFormatLocationDescriptorEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locationDescriptor', 'style': 'form', 'explode': True }})
    max_distance: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxDistance', 'style': 'form', 'explode': True }})
    only_civic: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'onlyCivic', 'style': 'form', 'explode': True }})
    output_srs: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'outputSRS', 'style': 'form', 'explode': True }})
    set_back: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'setBack', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSitesNearestOutputFormatRequest:
    path_params: GetSitesNearestOutputFormatPathParams = dataclasses.field()
    query_params: GetSitesNearestOutputFormatQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSitesNearestOutputFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
