import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetLoadBalancerTypesQueryParams:
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypesPricesPriceHourly:
    r"""GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypesPricesPriceHourly
    Hourly costs for a Resource in this Location
    """
    
    gross: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypesPricesPriceMonthly:
    r"""GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypesPricesPriceMonthly
    Monthly costs for a Resource in this Location
    """
    
    gross: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypesPrices:
    location: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    price_hourly: GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypesPricesPriceHourly = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_hourly') }})
    price_monthly: GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypesPricesPriceMonthly = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_monthly') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypes:
    deprecated: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    max_assigned_certificates: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_assigned_certificates') }})
    max_connections: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_connections') }})
    max_services: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_services') }})
    max_targets: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_targets') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    prices: list[GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypesPrices] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prices') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancerTypes200ApplicationJSON:
    load_balancer_types: list[GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypes] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_balancer_types') }})
    

@dataclasses.dataclass
class GetLoadBalancerTypesRequest:
    query_params: GetLoadBalancerTypesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetLoadBalancerTypesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_load_balancer_types_200_application_json_object: Optional[GetLoadBalancerTypes200ApplicationJSON] = dataclasses.field(default=None)
    
