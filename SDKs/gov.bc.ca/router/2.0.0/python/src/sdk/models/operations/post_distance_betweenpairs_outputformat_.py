import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class PostDistanceBetweenPairsOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    HTML = "html"


@dataclasses.dataclass
class PostDistanceBetweenPairsOutputFormatPathParams:
    output_format: PostDistanceBetweenPairsOutputFormatOutputFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'outputFormat', 'style': 'simple', 'explode': False }})
    
class PostDistanceBetweenPairsOutputFormatCriteriaEnum(str, Enum):
    SHORTEST = "shortest"
    FASTEST = "fastest"

class PostDistanceBetweenPairsOutputFormatDistanceUnitEnum(str, Enum):
    KM = "km"
    MI = "mi"


@dataclasses.dataclass
class PostDistanceBetweenPairsOutputFormatQueryParams:
    from_points: str = dataclasses.field(metadata={'query_param': { 'field_name': 'fromPoints', 'style': 'form', 'explode': True }})
    to_points: str = dataclasses.field(metadata={'query_param': { 'field_name': 'toPoints', 'style': 'form', 'explode': True }})
    correct_side: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'correctSide', 'style': 'form', 'explode': True }})
    criteria: Optional[PostDistanceBetweenPairsOutputFormatCriteriaEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'criteria', 'style': 'form', 'explode': True }})
    departure: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'departure', 'style': 'form', 'explode': True }})
    disable: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'disable', 'style': 'form', 'explode': True }})
    distance_unit: Optional[PostDistanceBetweenPairsOutputFormatDistanceUnitEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'distanceUnit', 'style': 'form', 'explode': True }})
    max_pairs: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxPairs', 'style': 'form', 'explode': True }})
    output_srs: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'outputSRS', 'style': 'form', 'explode': True }})
    route_description: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'routeDescription', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostDistanceBetweenPairsOutputFormatRequest:
    path_params: PostDistanceBetweenPairsOutputFormatPathParams = dataclasses.field()
    query_params: PostDistanceBetweenPairsOutputFormatQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostDistanceBetweenPairsOutputFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
