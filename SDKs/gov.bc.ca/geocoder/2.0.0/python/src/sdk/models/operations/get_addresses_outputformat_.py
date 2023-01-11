import dataclasses
from typing import Optional
from enum import Enum

class GetAddressesOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    GEOJSON = "geojson"
    XHTML = "xhtml"
    KML = "kml"
    GML = "gml"
    CSV = "csv"
    SHPZ = "shpz"


@dataclasses.dataclass
class GetAddressesOutputFormatPathParams:
    output_format: GetAddressesOutputFormatOutputFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'outputFormat', 'style': 'simple', 'explode': False }})
    
class GetAddressesOutputFormatInterpolationEnum(str, Enum):
    ADAPTIVE = "adaptive"
    LINEAR = "linear"
    NONE = "none"

class GetAddressesOutputFormatLocationDescriptorEnum(str, Enum):
    ANY = "any"
    ACCESS_POINT = "accessPoint"
    FRONT_DOOR_POINT = "frontDoorPoint"
    PARCEL_POINT = "parcelPoint"
    ROOFTOP_POINT = "rooftopPoint"
    ROUTING_POINT = "routingPoint"

class GetAddressesOutputFormatStreetDirectionEnum(str, Enum):
    N = "N"
    S = "S"
    E = "E"
    W = "W"
    O = "O"
    NE = "NE"
    NO = "NO"
    NW = "NW"
    SE = "SE"
    SO = "SO"
    SW = "SW"

class GetAddressesOutputFormatUnitDesignatorEnum(str, Enum):
    APT = "APT"
    BLDG = "BLDG"
    BSMT = "BSMT"
    FLR = "FLR"
    LOBBY = "LOBBY"
    LWR = "LWR"
    PAD = "PAD"
    PH = "PH"
    REAR = "REAR"
    RM = "RM"
    SIDE = "SIDE"
    SITE = "SITE"
    SUITE = "SUITE"
    TH = "TH"
    UNIT = "UNIT"
    UPPR = "UPPR"


@dataclasses.dataclass
class GetAddressesOutputFormatQueryParams:
    address_string: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'addressString', 'style': 'form', 'explode': True }})
    auto_complete: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'autoComplete', 'style': 'form', 'explode': True }})
    bbox: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'bbox', 'style': 'form', 'explode': True }})
    brief: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'brief', 'style': 'form', 'explode': True }})
    centre: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'centre', 'style': 'form', 'explode': True }})
    civic_number: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'civicNumber', 'style': 'form', 'explode': True }})
    civic_number_suffix: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'civicNumberSuffix', 'style': 'form', 'explode': True }})
    echo: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'echo', 'style': 'form', 'explode': True }})
    extrapolate: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'extrapolate', 'style': 'form', 'explode': True }})
    interpolation: Optional[GetAddressesOutputFormatInterpolationEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'interpolation', 'style': 'form', 'explode': True }})
    localities: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'localities', 'style': 'form', 'explode': True }})
    locality_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'localityName', 'style': 'form', 'explode': True }})
    location_descriptor: Optional[GetAddressesOutputFormatLocationDescriptorEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locationDescriptor', 'style': 'form', 'explode': True }})
    match_precision: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'matchPrecision', 'style': 'form', 'explode': True }})
    match_precision_not: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'matchPrecisionNot', 'style': 'form', 'explode': True }})
    max_distance: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxDistance', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    min_score: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'minScore', 'style': 'form', 'explode': True }})
    not_localities: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'notLocalities', 'style': 'form', 'explode': True }})
    output_srs: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'outputSRS', 'style': 'form', 'explode': True }})
    parcel_point: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'parcelPoint', 'style': 'form', 'explode': True }})
    province_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'provinceCode', 'style': 'form', 'explode': True }})
    set_back: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'setBack', 'style': 'form', 'explode': True }})
    site_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'siteName', 'style': 'form', 'explode': True }})
    street_direction: Optional[GetAddressesOutputFormatStreetDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'streetDirection', 'style': 'form', 'explode': True }})
    street_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'streetName', 'style': 'form', 'explode': True }})
    street_qualifier: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'streetQualifier', 'style': 'form', 'explode': True }})
    street_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'streetType', 'style': 'form', 'explode': True }})
    unit_designator: Optional[GetAddressesOutputFormatUnitDesignatorEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'unitDesignator', 'style': 'form', 'explode': True }})
    unit_number: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'unitNumber', 'style': 'form', 'explode': True }})
    unit_number_suffix: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'unitNumberSuffix', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAddressesOutputFormatRequest:
    path_params: GetAddressesOutputFormatPathParams = dataclasses.field()
    query_params: GetAddressesOutputFormatQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAddressesOutputFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
