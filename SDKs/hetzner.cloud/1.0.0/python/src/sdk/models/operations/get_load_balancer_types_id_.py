import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetLoadBalancerTypesIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancerTypesID200ApplicationJSONLoadBalancerTypePricesPriceHourly:
    r"""GetLoadBalancerTypesID200ApplicationJSONLoadBalancerTypePricesPriceHourly
    Hourly costs for a Resource in this Location
    """
    
    gross: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancerTypesID200ApplicationJSONLoadBalancerTypePricesPriceMonthly:
    r"""GetLoadBalancerTypesID200ApplicationJSONLoadBalancerTypePricesPriceMonthly
    Monthly costs for a Resource in this Location
    """
    
    gross: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancerTypesID200ApplicationJSONLoadBalancerTypePrices:
    location: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    price_hourly: GetLoadBalancerTypesID200ApplicationJSONLoadBalancerTypePricesPriceHourly = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_hourly') }})
    price_monthly: GetLoadBalancerTypesID200ApplicationJSONLoadBalancerTypePricesPriceMonthly = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_monthly') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancerTypesID200ApplicationJSONLoadBalancerType:
    deprecated: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    max_assigned_certificates: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_assigned_certificates') }})
    max_connections: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_connections') }})
    max_services: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_services') }})
    max_targets: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_targets') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    prices: list[GetLoadBalancerTypesID200ApplicationJSONLoadBalancerTypePrices] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prices') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancerTypesID200ApplicationJSON:
    load_balancer_type: Optional[GetLoadBalancerTypesID200ApplicationJSONLoadBalancerType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_balancer_type') }})
    

@dataclasses.dataclass
class GetLoadBalancerTypesIDRequest:
    path_params: GetLoadBalancerTypesIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetLoadBalancerTypesIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_load_balancer_types_id_200_application_json_object: Optional[GetLoadBalancerTypesID200ApplicationJSON] = dataclasses.field(default=None)
    
