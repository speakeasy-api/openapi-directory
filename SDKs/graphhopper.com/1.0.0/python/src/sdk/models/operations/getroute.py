import dataclasses
from typing import Optional
from enum import Enum
from ..shared import vehicleprofileid_enum as shared_vehicleprofileid_enum
from ..shared import gherror as shared_gherror
from ..shared import routeresponse as shared_routeresponse

class GetRouteAlgorithmEnum(str, Enum):
    ROUND_TRIP = "round_trip"
    ALTERNATIVE_ROUTE = "alternative_route"

class GetRouteCurbsideEnum(str, Enum):
    ANY = "any"
    RIGHT = "right"
    LEFT = "left"


@dataclasses.dataclass
class GetRouteQueryParams:
    point: list[str] = dataclasses.field(metadata={'query_param': { 'field_name': 'point', 'style': 'form', 'explode': True }})
    algorithm: Optional[GetRouteAlgorithmEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'algorithm', 'style': 'form', 'explode': True }})
    alternative_route_max_paths: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alternative_route.max_paths', 'style': 'form', 'explode': True }})
    alternative_route_max_share_factor: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alternative_route.max_share_factor', 'style': 'form', 'explode': True }})
    alternative_route_max_weight_factor: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alternative_route.max_weight_factor', 'style': 'form', 'explode': True }})
    avoid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'avoid', 'style': 'form', 'explode': True }})
    block_area: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'block_area', 'style': 'form', 'explode': True }})
    calc_points: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'calc_points', 'style': 'form', 'explode': True }})
    ch_disable: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ch.disable', 'style': 'form', 'explode': True }})
    curbside: Optional[list[GetRouteCurbsideEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'curbside', 'style': 'form', 'explode': True }})
    debug: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'debug', 'style': 'form', 'explode': True }})
    details: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'details', 'style': 'form', 'explode': True }})
    elevation: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'elevation', 'style': 'form', 'explode': True }})
    heading: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'heading', 'style': 'form', 'explode': True }})
    heading_penalty: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'heading_penalty', 'style': 'form', 'explode': True }})
    instructions: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'instructions', 'style': 'form', 'explode': True }})
    locale: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    optimize: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'optimize', 'style': 'form', 'explode': True }})
    pass_through: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pass_through', 'style': 'form', 'explode': True }})
    point_hint: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'point_hint', 'style': 'form', 'explode': True }})
    points_encoded: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'points_encoded', 'style': 'form', 'explode': True }})
    round_trip_distance: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'round_trip.distance', 'style': 'form', 'explode': True }})
    round_trip_seed: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'round_trip.seed', 'style': 'form', 'explode': True }})
    snap_prevention: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'snap_prevention', 'style': 'form', 'explode': True }})
    turn_costs: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'turn_costs', 'style': 'form', 'explode': True }})
    vehicle: Optional[shared_vehicleprofileid_enum.VehicleProfileIDEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'vehicle', 'style': 'form', 'explode': True }})
    weighting: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'weighting', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRouteRequest:
    query_params: GetRouteQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRouteResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    gh_error: Optional[shared_gherror.GhError] = dataclasses.field(default=None)
    route_response: Optional[shared_routeresponse.RouteResponse] = dataclasses.field(default=None)
    
