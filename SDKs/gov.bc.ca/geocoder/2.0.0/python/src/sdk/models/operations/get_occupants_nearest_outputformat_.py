import dataclasses
from typing import Optional
from enum import Enum

class GetOccupantsNearestOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    GEOJSON = "geojson"
    XHTML = "xhtml"
    KML = "kml"
    GML = "gml"
    CSV = "csv"
    SHPZ = "shpz"


@dataclasses.dataclass
class GetOccupantsNearestOutputFormatPathParams:
    output_format: GetOccupantsNearestOutputFormatOutputFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'outputFormat', 'style': 'simple', 'explode': False }})
    
class GetOccupantsNearestOutputFormatLocationDescriptorEnum(str, Enum):
    ANY = "any"
    ACCESS_POINT = "accessPoint"
    FRONT_DOOR_POINT = "frontDoorPoint"
    PARCEL_POINT = "parcelPoint"
    ROOFTOP_POINT = "rooftopPoint"
    ROUTING_POINT = "routingPoint"


@dataclasses.dataclass
class GetOccupantsNearestOutputFormatQueryParams:
    point: str = dataclasses.field(metadata={'query_param': { 'field_name': 'point', 'style': 'form', 'explode': True }})
    brief: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'brief', 'style': 'form', 'explode': True }})
    location_descriptor: Optional[GetOccupantsNearestOutputFormatLocationDescriptorEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locationDescriptor', 'style': 'form', 'explode': True }})
    max_distance: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxDistance', 'style': 'form', 'explode': True }})
    output_srs: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'outputSRS', 'style': 'form', 'explode': True }})
    set_back: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'setBack', 'style': 'form', 'explode': True }})
    tags: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetOccupantsNearestOutputFormatRequest:
    path_params: GetOccupantsNearestOutputFormatPathParams = dataclasses.field()
    query_params: GetOccupantsNearestOutputFormatQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOccupantsNearestOutputFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
