import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class PostTruckRouteOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    KML = "kml"
    HTML = "html"


@dataclasses.dataclass
class PostTruckRouteOutputFormatPathParams:
    output_format: PostTruckRouteOutputFormatOutputFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'outputFormat', 'style': 'simple', 'explode': False }})
    
class PostTruckRouteOutputFormatCriteriaEnum(str, Enum):
    SHORTEST = "shortest"
    FASTEST = "fastest"

class PostTruckRouteOutputFormatDistanceUnitEnum(str, Enum):
    KM = "km"
    MI = "mi"


@dataclasses.dataclass
class PostTruckRouteOutputFormatQueryParams:
    points: str = dataclasses.field(metadata={'query_param': { 'field_name': 'points', 'style': 'form', 'explode': True }})
    correct_side: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'correctSide', 'style': 'form', 'explode': True }})
    criteria: Optional[PostTruckRouteOutputFormatCriteriaEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'criteria', 'style': 'form', 'explode': True }})
    departure: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'departure', 'style': 'form', 'explode': True }})
    disable: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'disable', 'style': 'form', 'explode': True }})
    distance_unit: Optional[PostTruckRouteOutputFormatDistanceUnitEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'distanceUnit', 'style': 'form', 'explode': True }})
    output_srs: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'outputSRS', 'style': 'form', 'explode': True }})
    round_trip: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'roundTrip', 'style': 'form', 'explode': True }})
    route_description: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'routeDescription', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostTruckRouteOutputFormatRequest:
    path_params: PostTruckRouteOutputFormatPathParams = dataclasses.field()
    query_params: PostTruckRouteOutputFormatQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostTruckRouteOutputFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
