import dataclasses
from typing import Optional
from enum import Enum

class GetSitesWithinOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    GEOJSON = "geojson"
    XHTML = "xhtml"
    KML = "kml"
    GML = "gml"
    CSV = "csv"
    SHPZ = "shpz"


@dataclasses.dataclass
class GetSitesWithinOutputFormatPathParams:
    output_format: GetSitesWithinOutputFormatOutputFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'outputFormat', 'style': 'simple', 'explode': False }})
    
class GetSitesWithinOutputFormatLocationDescriptorEnum(str, Enum):
    ANY = "any"
    ACCESS_POINT = "accessPoint"
    FRONT_DOOR_POINT = "frontDoorPoint"
    PARCEL_POINT = "parcelPoint"
    ROOFTOP_POINT = "rooftopPoint"
    ROUTING_POINT = "routingPoint"


@dataclasses.dataclass
class GetSitesWithinOutputFormatQueryParams:
    bbox: str = dataclasses.field(metadata={'query_param': { 'field_name': 'bbox', 'style': 'form', 'explode': True }})
    brief: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'brief', 'style': 'form', 'explode': True }})
    exclude_units: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'excludeUnits', 'style': 'form', 'explode': True }})
    location_descriptor: Optional[GetSitesWithinOutputFormatLocationDescriptorEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locationDescriptor', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    only_civic: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'onlyCivic', 'style': 'form', 'explode': True }})
    output_srs: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'outputSRS', 'style': 'form', 'explode': True }})
    set_back: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'setBack', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSitesWithinOutputFormatRequest:
    path_params: GetSitesWithinOutputFormatPathParams = dataclasses.field()
    query_params: GetSitesWithinOutputFormatQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSitesWithinOutputFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
