import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetLoadBalancersIDMetricsPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetLoadBalancersIDMetricsTypeEnum(str, Enum):
    OPEN_CONNECTIONS = "open_connections"
    CONNECTIONS_PER_SECOND = "connections_per_second"
    REQUESTS_PER_SECOND = "requests_per_second"
    BANDWIDTH = "bandwidth"


@dataclasses.dataclass
class GetLoadBalancersIDMetricsQueryParams:
    end: str = dataclasses.field(metadata={'query_param': { 'field_name': 'end', 'style': 'form', 'explode': True }})
    start: str = dataclasses.field(metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    type: GetLoadBalancersIDMetricsTypeEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    step: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'step', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancersIDMetrics200ApplicationJSONMetricsTimeSeries:
    values: list[list[Any]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancersIDMetrics200ApplicationJSONMetrics:
    end: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    start: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    step: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('step') }})
    time_series: dict[str, GetLoadBalancersIDMetrics200ApplicationJSONMetricsTimeSeries] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_series') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancersIDMetrics200ApplicationJSON:
    metrics: GetLoadBalancersIDMetrics200ApplicationJSONMetrics = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    

@dataclasses.dataclass
class GetLoadBalancersIDMetricsRequest:
    path_params: GetLoadBalancersIDMetricsPathParams = dataclasses.field()
    query_params: GetLoadBalancersIDMetricsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetLoadBalancersIDMetricsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_load_balancers_id_metrics_200_application_json_object: Optional[GetLoadBalancersIDMetrics200ApplicationJSON] = dataclasses.field(default=None)
    
