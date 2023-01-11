import dataclasses
from typing import Optional
from enum import Enum

class GetOccupantsOccupantIDOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    GEOJSON = "geojson"
    XHTML = "xhtml"
    KML = "kml"
    GML = "gml"
    CSV = "csv"
    SHPZ = "shpz"


@dataclasses.dataclass
class GetOccupantsOccupantIDOutputFormatPathParams:
    occupant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'occupantID', 'style': 'simple', 'explode': False }})
    output_format: GetOccupantsOccupantIDOutputFormatOutputFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'outputFormat', 'style': 'simple', 'explode': False }})
    
class GetOccupantsOccupantIDOutputFormatLocationDescriptorEnum(str, Enum):
    ANY = "any"
    ACCESS_POINT = "accessPoint"
    FRONT_DOOR_POINT = "frontDoorPoint"
    PARCEL_POINT = "parcelPoint"
    ROOFTOP_POINT = "rooftopPoint"
    ROUTING_POINT = "routingPoint"


@dataclasses.dataclass
class GetOccupantsOccupantIDOutputFormatQueryParams:
    brief: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'brief', 'style': 'form', 'explode': True }})
    location_descriptor: Optional[GetOccupantsOccupantIDOutputFormatLocationDescriptorEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locationDescriptor', 'style': 'form', 'explode': True }})
    output_srs: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'outputSRS', 'style': 'form', 'explode': True }})
    set_back: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'setBack', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetOccupantsOccupantIDOutputFormatRequest:
    path_params: GetOccupantsOccupantIDOutputFormatPathParams = dataclasses.field()
    query_params: GetOccupantsOccupantIDOutputFormatQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOccupantsOccupantIDOutputFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
