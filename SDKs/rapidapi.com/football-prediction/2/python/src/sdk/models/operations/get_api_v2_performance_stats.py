import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetAPIV2PerformanceStatsHeaders:
    x_rapid_api_key: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-RapidApi-Key', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetAPIV2PerformanceStats200ApplicationJSONDataAccuracy:
    last_14_days: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_14_days') }})
    last_30_days: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_30_days') }})
    last_7_days: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_7_days') }})
    yesterday: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yesterday') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAPIV2PerformanceStats200ApplicationJSONDataDetailsLast14Days:
    lost: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lost') }})
    pending: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pending') }})
    postponed: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postponed') }})
    total: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    won: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('won') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAPIV2PerformanceStats200ApplicationJSONDataDetailsLast30Days:
    lost: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lost') }})
    pending: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pending') }})
    postponed: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postponed') }})
    total: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    won: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('won') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAPIV2PerformanceStats200ApplicationJSONDataDetailsLast7Days:
    lost: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lost') }})
    pending: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pending') }})
    postponed: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postponed') }})
    total: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    won: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('won') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAPIV2PerformanceStats200ApplicationJSONDataDetailsYesterday:
    lost: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lost') }})
    pending: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pending') }})
    postponed: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postponed') }})
    total: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    won: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('won') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAPIV2PerformanceStats200ApplicationJSONDataDetails:
    last_14_days: Optional[GetAPIV2PerformanceStats200ApplicationJSONDataDetailsLast14Days] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_14_days') }})
    last_30_days: Optional[GetAPIV2PerformanceStats200ApplicationJSONDataDetailsLast30Days] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_30_days') }})
    last_7_days: Optional[GetAPIV2PerformanceStats200ApplicationJSONDataDetailsLast7Days] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_7_days') }})
    yesterday: Optional[GetAPIV2PerformanceStats200ApplicationJSONDataDetailsYesterday] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yesterday') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAPIV2PerformanceStats200ApplicationJSONData:
    accuracy: Optional[GetAPIV2PerformanceStats200ApplicationJSONDataAccuracy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accuracy') }})
    details: Optional[GetAPIV2PerformanceStats200ApplicationJSONDataDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    market: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('market') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAPIV2PerformanceStats200ApplicationJSON:
    data: Optional[GetAPIV2PerformanceStats200ApplicationJSONData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAPIV2PerformanceStats404ApplicationJSON:
    errors: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclasses.dataclass
class GetAPIV2PerformanceStatsRequest:
    headers: GetAPIV2PerformanceStatsHeaders = dataclasses.field()
    

@dataclasses.dataclass
class GetAPIV2PerformanceStatsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_api_v2_performance_stats_200_application_json_object: Optional[GetAPIV2PerformanceStats200ApplicationJSON] = dataclasses.field(default=None)
    get_api_v2_performance_stats_404_application_json_object: Optional[GetAPIV2PerformanceStats404ApplicationJSON] = dataclasses.field(default=None)
    
