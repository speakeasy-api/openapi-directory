import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetServersIDMetricsPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetServersIDMetricsTypeEnum(str, Enum):
    CPU = "cpu"
    DISK = "disk"
    NETWORK = "network"


@dataclasses.dataclass
class GetServersIDMetricsQueryParams:
    end: str = dataclasses.field(metadata={'query_param': { 'field_name': 'end', 'style': 'form', 'explode': True }})
    start: str = dataclasses.field(metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    type: GetServersIDMetricsTypeEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    step: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'step', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetServersIDMetrics200ApplicationJSONMetricsTimeSeries:
    values: list[list[Any]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    

@dataclass_json
@dataclasses.dataclass
class GetServersIDMetrics200ApplicationJSONMetrics:
    end: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    start: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    step: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('step') }})
    time_series: dict[str, GetServersIDMetrics200ApplicationJSONMetricsTimeSeries] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_series') }})
    

@dataclass_json
@dataclasses.dataclass
class GetServersIDMetrics200ApplicationJSON:
    metrics: GetServersIDMetrics200ApplicationJSONMetrics = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    

@dataclasses.dataclass
class GetServersIDMetricsRequest:
    path_params: GetServersIDMetricsPathParams = dataclasses.field()
    query_params: GetServersIDMetricsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetServersIDMetricsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_servers_id_metrics_200_application_json_object: Optional[GetServersIDMetrics200ApplicationJSON] = dataclasses.field(default=None)
    
