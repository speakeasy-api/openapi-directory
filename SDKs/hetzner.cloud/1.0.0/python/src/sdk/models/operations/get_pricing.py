import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetPricing200ApplicationJSONPricingFloatingIPPriceMonthly:
    gross: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPricing200ApplicationJSONPricingFloatingIP:
    r"""GetPricing200ApplicationJSONPricingFloatingIP
    The cost of one Floating IP per month
    """
    
    price_monthly: GetPricing200ApplicationJSONPricingFloatingIPPriceMonthly = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_monthly') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPricing200ApplicationJSONPricingFloatingIpsPricesPriceMonthly:
    r"""GetPricing200ApplicationJSONPricingFloatingIpsPricesPriceMonthly
    Monthly costs for a Floating IP type in this Location
    """
    
    gross: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPricing200ApplicationJSONPricingFloatingIpsPrices:
    location: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    price_monthly: GetPricing200ApplicationJSONPricingFloatingIpsPricesPriceMonthly = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_monthly') }})
    
class GetPricing200ApplicationJSONPricingFloatingIpsTypeEnum(str, Enum):
    IPV4 = "ipv4"
    IPV6 = "ipv6"


@dataclass_json
@dataclasses.dataclass
class GetPricing200ApplicationJSONPricingFloatingIps:
    prices: list[GetPricing200ApplicationJSONPricingFloatingIpsPrices] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prices') }})
    type: GetPricing200ApplicationJSONPricingFloatingIpsTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPricing200ApplicationJSONPricingImagePricePerGbMonth:
    gross: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPricing200ApplicationJSONPricingImage:
    r"""GetPricing200ApplicationJSONPricingImage
    The cost of Image per GB/month
    """
    
    price_per_gb_month: GetPricing200ApplicationJSONPricingImagePricePerGbMonth = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_per_gb_month') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPricing200ApplicationJSONPricingLoadBalancerTypesPricesPriceHourly:
    r"""GetPricing200ApplicationJSONPricingLoadBalancerTypesPricesPriceHourly
    Hourly costs for a Load Balancer type in this network zone
    """
    
    gross: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPricing200ApplicationJSONPricingLoadBalancerTypesPricesPriceMonthly:
    r"""GetPricing200ApplicationJSONPricingLoadBalancerTypesPricesPriceMonthly
    Monthly costs for a Load Balancer type in this network zone
    """
    
    gross: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPricing200ApplicationJSONPricingLoadBalancerTypesPrices:
    location: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    price_hourly: GetPricing200ApplicationJSONPricingLoadBalancerTypesPricesPriceHourly = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_hourly') }})
    price_monthly: GetPricing200ApplicationJSONPricingLoadBalancerTypesPricesPriceMonthly = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_monthly') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPricing200ApplicationJSONPricingLoadBalancerTypes:
    id: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    prices: list[GetPricing200ApplicationJSONPricingLoadBalancerTypesPrices] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prices') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPricing200ApplicationJSONPricingServerBackup:
    r"""GetPricing200ApplicationJSONPricingServerBackup
    Will increase base Server costs by specific percentage
    """
    
    percentage: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentage') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPricing200ApplicationJSONPricingServerTypesPricesPriceHourly:
    r"""GetPricing200ApplicationJSONPricingServerTypesPricesPriceHourly
    Hourly costs for a Server type in this Location
    """
    
    gross: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPricing200ApplicationJSONPricingServerTypesPricesPriceMonthly:
    r"""GetPricing200ApplicationJSONPricingServerTypesPricesPriceMonthly
    Monthly costs for a Server type in this Location
    """
    
    gross: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPricing200ApplicationJSONPricingServerTypesPrices:
    location: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    price_hourly: GetPricing200ApplicationJSONPricingServerTypesPricesPriceHourly = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_hourly') }})
    price_monthly: GetPricing200ApplicationJSONPricingServerTypesPricesPriceMonthly = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_monthly') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPricing200ApplicationJSONPricingServerTypes:
    id: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    prices: list[GetPricing200ApplicationJSONPricingServerTypesPrices] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prices') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPricing200ApplicationJSONPricingTrafficPricePerTb:
    gross: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPricing200ApplicationJSONPricingTraffic:
    r"""GetPricing200ApplicationJSONPricingTraffic
    The cost of additional traffic per TB
    """
    
    price_per_tb: GetPricing200ApplicationJSONPricingTrafficPricePerTb = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_per_tb') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPricing200ApplicationJSONPricingVolumePricePerGbMonth:
    gross: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPricing200ApplicationJSONPricingVolume:
    r"""GetPricing200ApplicationJSONPricingVolume
    The cost of Volume per GB/month
    """
    
    price_per_gb_month: GetPricing200ApplicationJSONPricingVolumePricePerGbMonth = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_per_gb_month') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPricing200ApplicationJSONPricing:
    currency: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    floating_ip: GetPricing200ApplicationJSONPricingFloatingIP = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('floating_ip') }})
    floating_ips: list[GetPricing200ApplicationJSONPricingFloatingIps] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('floating_ips') }})
    image: GetPricing200ApplicationJSONPricingImage = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    load_balancer_types: list[GetPricing200ApplicationJSONPricingLoadBalancerTypes] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_balancer_types') }})
    server_backup: GetPricing200ApplicationJSONPricingServerBackup = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_backup') }})
    server_types: list[GetPricing200ApplicationJSONPricingServerTypes] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_types') }})
    traffic: GetPricing200ApplicationJSONPricingTraffic = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('traffic') }})
    vat_rate: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vat_rate') }})
    volume: GetPricing200ApplicationJSONPricingVolume = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('volume') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPricing200ApplicationJSON:
    pricing: GetPricing200ApplicationJSONPricing = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pricing') }})
    

@dataclasses.dataclass
class GetPricingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_pricing_200_application_json_object: Optional[GetPricing200ApplicationJSON] = dataclasses.field(default=None)
    
