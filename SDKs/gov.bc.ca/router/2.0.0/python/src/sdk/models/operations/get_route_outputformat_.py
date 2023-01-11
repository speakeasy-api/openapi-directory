import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetRouteOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    KML = "kml"
    HTML = "html"


@dataclasses.dataclass
class GetRouteOutputFormatPathParams:
    output_format: GetRouteOutputFormatOutputFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'outputFormat', 'style': 'simple', 'explode': False }})
    
class GetRouteOutputFormatCriteriaEnum(str, Enum):
    SHORTEST = "shortest"
    FASTEST = "fastest"

class GetRouteOutputFormatDistanceUnitEnum(str, Enum):
    KM = "km"
    MI = "mi"


@dataclasses.dataclass
class GetRouteOutputFormatQueryParams:
    points: str = dataclasses.field(metadata={'query_param': { 'field_name': 'points', 'style': 'form', 'explode': True }})
    correct_side: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'correctSide', 'style': 'form', 'explode': True }})
    criteria: Optional[GetRouteOutputFormatCriteriaEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'criteria', 'style': 'form', 'explode': True }})
    departure: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'departure', 'style': 'form', 'explode': True }})
    disable: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'disable', 'style': 'form', 'explode': True }})
    distance_unit: Optional[GetRouteOutputFormatDistanceUnitEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'distanceUnit', 'style': 'form', 'explode': True }})
    output_srs: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'outputSRS', 'style': 'form', 'explode': True }})
    round_trip: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'roundTrip', 'style': 'form', 'explode': True }})
    route_description: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'routeDescription', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRouteOutputFormatRequest:
    path_params: GetRouteOutputFormatPathParams = dataclasses.field()
    query_params: GetRouteOutputFormatQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRouteOutputFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
