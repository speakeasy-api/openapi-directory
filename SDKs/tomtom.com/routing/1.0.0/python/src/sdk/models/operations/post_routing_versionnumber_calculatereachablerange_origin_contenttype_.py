import dataclasses
from typing import Optional
from enum import Enum
from ..shared import contenttype_enum as shared_contenttype_enum
from ..shared import hilliness_enum as shared_hilliness_enum
from ..shared import report_enum as shared_report_enum
from ..shared import routetype_enum as shared_routetype_enum
from ..shared import travelmode_enum as shared_travelmode_enum
from ..shared import downhillefficiency_enum as shared_downhillefficiency_enum
from ..shared import windingness_enum as shared_windingness_enum
from ..shared import calculatereachablerangepostdataparameters as shared_calculatereachablerangepostdataparameters


@dataclasses.dataclass
class PostRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams:
    content_type: shared_contenttype_enum.ContentTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'contentType', 'style': 'simple', 'explode': False }})
    origin: str = dataclasses.field(metadata={'path_param': { 'field_name': 'origin', 'style': 'simple', 'explode': False }})
    version_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams:
    acceleration_efficiency: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'accelerationEfficiency', 'style': 'form', 'explode': True }})
    arrive_at: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'arriveAt', 'style': 'form', 'explode': True }})
    auxiliary_power_in_liters_per_hour: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'auxiliaryPowerInLitersPerHour', 'style': 'form', 'explode': True }})
    avoid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'avoid', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    constant_speed_consumption_in_liters_per_hundredkm: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'constantSpeedConsumptionInLitersPerHundredkm', 'style': 'form', 'explode': True }})
    constant_speed_consumption_ink_wh_per_hundredkm: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'constantSpeedConsumptionInkWhPerHundredkm', 'style': 'form', 'explode': True }})
    current_fuel_in_liters: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'currentFuelInLiters', 'style': 'form', 'explode': True }})
    deceleration_efficiency: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'decelerationEfficiency', 'style': 'form', 'explode': True }})
    depart_at: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'departAt', 'style': 'form', 'explode': True }})
    downhill_efficiency: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'downhillEfficiency', 'style': 'form', 'explode': True }})
    energy_budget_ink_wh: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'energyBudgetInkWh', 'style': 'form', 'explode': True }})
    fuel_budget_in_liters: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fuelBudgetInLiters', 'style': 'form', 'explode': True }})
    fuel_energy_density_in_m_joules_per_liter: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fuelEnergyDensityInMJoulesPerLiter', 'style': 'form', 'explode': True }})
    hilliness: Optional[shared_hilliness_enum.HillinessEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'hilliness', 'style': 'form', 'explode': True }})
    report: Optional[shared_report_enum.ReportEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'report', 'style': 'form', 'explode': True }})
    route_type: Optional[shared_routetype_enum.RouteTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'routeType', 'style': 'form', 'explode': True }})
    time_budget_in_sec: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timeBudgetInSec', 'style': 'form', 'explode': True }})
    traffic: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'traffic', 'style': 'form', 'explode': True }})
    travel_mode: Optional[shared_travelmode_enum.TravelModeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'travelMode', 'style': 'form', 'explode': True }})
    uphill_efficiency: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uphillEfficiency', 'style': 'form', 'explode': True }})
    vehicle_axle_weight: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'vehicleAxleWeight', 'style': 'form', 'explode': True }})
    vehicle_commercial: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'vehicleCommercial', 'style': 'form', 'explode': True }})
    vehicle_engine_type: Optional[shared_downhillefficiency_enum.DownhillEfficiencyEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'vehicleEngineType', 'style': 'form', 'explode': True }})
    vehicle_height: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'vehicleHeight', 'style': 'form', 'explode': True }})
    vehicle_length: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'vehicleLength', 'style': 'form', 'explode': True }})
    vehicle_load_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'vehicleLoadType', 'style': 'form', 'explode': True }})
    vehicle_max_speed: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'vehicleMaxSpeed', 'style': 'form', 'explode': True }})
    vehicle_weight: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'vehicleWeight', 'style': 'form', 'explode': True }})
    vehicle_width: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'vehicleWidth', 'style': 'form', 'explode': True }})
    windingness: Optional[shared_windingness_enum.WindingnessEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'windingness', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    calculate_reachable_range_post_data_parameters: Optional[shared_calculatereachablerangepostdataparameters.CalculateReachableRangePostDataParameters] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest:
    path_params: PostRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams = dataclasses.field()
    query_params: PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams = dataclasses.field()
    request: Optional[PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
