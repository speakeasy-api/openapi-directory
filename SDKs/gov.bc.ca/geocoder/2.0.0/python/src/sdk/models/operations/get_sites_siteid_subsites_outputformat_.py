import dataclasses
from typing import Optional
from enum import Enum

class GetSitesSiteIDSubsitesOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    GEOJSON = "geojson"
    XHTML = "xhtml"
    KML = "kml"
    GML = "gml"
    CSV = "csv"
    SHPZ = "shpz"


@dataclasses.dataclass
class GetSitesSiteIDSubsitesOutputFormatPathParams:
    output_format: GetSitesSiteIDSubsitesOutputFormatOutputFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'outputFormat', 'style': 'simple', 'explode': False }})
    site_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'siteID', 'style': 'simple', 'explode': False }})
    
class GetSitesSiteIDSubsitesOutputFormatLocationDescriptorEnum(str, Enum):
    ANY = "any"
    ACCESS_POINT = "accessPoint"
    FRONT_DOOR_POINT = "frontDoorPoint"
    PARCEL_POINT = "parcelPoint"
    ROOFTOP_POINT = "rooftopPoint"
    ROUTING_POINT = "routingPoint"


@dataclasses.dataclass
class GetSitesSiteIDSubsitesOutputFormatQueryParams:
    brief: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'brief', 'style': 'form', 'explode': True }})
    location_descriptor: Optional[GetSitesSiteIDSubsitesOutputFormatLocationDescriptorEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locationDescriptor', 'style': 'form', 'explode': True }})
    output_srs: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'outputSRS', 'style': 'form', 'explode': True }})
    set_back: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'setBack', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSitesSiteIDSubsitesOutputFormatRequest:
    path_params: GetSitesSiteIDSubsitesOutputFormatPathParams = dataclasses.field()
    query_params: GetSitesSiteIDSubsitesOutputFormatQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSitesSiteIDSubsitesOutputFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
