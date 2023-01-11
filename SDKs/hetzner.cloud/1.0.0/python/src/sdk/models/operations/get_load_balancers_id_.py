import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetLoadBalancersIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetLoadBalancersID200ApplicationJSONLoadBalancerAlgorithmTypeEnum(str, Enum):
    ROUND_ROBIN = "round_robin"
    LEAST_CONNECTIONS = "least_connections"


@dataclass_json
@dataclasses.dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerAlgorithm:
    r"""GetLoadBalancersID200ApplicationJSONLoadBalancerAlgorithm
    Algorithm of the Load Balancer
    """
    
    type: GetLoadBalancersID200ApplicationJSONLoadBalancerAlgorithmTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceHourly:
    r"""GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceHourly
    Hourly costs for a Resource in this Location
    """
    
    gross: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceMonthly:
    r"""GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceMonthly
    Monthly costs for a Resource in this Location
    """
    
    gross: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTypePrices:
    location: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    price_hourly: GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceHourly = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_hourly') }})
    price_monthly: GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceMonthly = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_monthly') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerType:
    deprecated: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    max_assigned_certificates: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_assigned_certificates') }})
    max_connections: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_connections') }})
    max_services: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_services') }})
    max_targets: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_targets') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    prices: list[GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTypePrices] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prices') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerLocation:
    city: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    latitude: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network_zone: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_zone') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerPrivateNet:
    ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    network: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerProtection:
    r"""GetLoadBalancersID200ApplicationJSONLoadBalancerProtection
    Protection configuration for the Resource
    """
    
    delete: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerPublicNetIpv4:
    r"""GetLoadBalancersID200ApplicationJSONLoadBalancerPublicNetIpv4
    IP address (v4)
    """
    
    dns_ptr: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerPublicNetIpv6:
    r"""GetLoadBalancersID200ApplicationJSONLoadBalancerPublicNetIpv6
    IP address (v6)
    """
    
    dns_ptr: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerPublicNet:
    r"""GetLoadBalancersID200ApplicationJSONLoadBalancerPublicNet
    Public network information
    """
    
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    ipv4: GetLoadBalancersID200ApplicationJSONLoadBalancerPublicNetIpv4 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv4') }})
    ipv6: GetLoadBalancersID200ApplicationJSONLoadBalancerPublicNetIpv6 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv6') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP:
    r"""GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP
    Additional configuration for protocol http
    """
    
    domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    response: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    status_codes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_codes') }})
    tls: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tls') }})
    
class GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum(str, Enum):
    TCP = "tcp"
    HTTP = "http"


@dataclass_json
@dataclasses.dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck:
    r"""GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck
    Service health check
    """
    
    interval: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interval') }})
    port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    protocol: GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    retries: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('retries') }})
    timeout: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    http: Optional[GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceHTTP:
    r"""GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceHTTP
    Configuration option for protocols http and https
    """
    
    cookie_lifetime: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookie_lifetime') }})
    cookie_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookie_name') }})
    certificates: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificates') }})
    redirect_http: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect_http') }})
    sticky_sessions: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sticky_sessions') }})
    
class GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceProtocolEnum(str, Enum):
    TCP = "tcp"
    HTTP = "http"
    HTTPS = "https"


@dataclass_json
@dataclasses.dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerService:
    destination_port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_port') }})
    health_check: GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('health_check') }})
    listen_port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('listen_port') }})
    protocol: GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    proxyprotocol: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxyprotocol') }})
    http: Optional[GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerServiceHTTP] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetHealthStatus:
    listen_port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listen_port') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetIP:
    r"""GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetIP
    IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
    """
    
    ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetLabelSelector:
    r"""GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetLabelSelector
    Label selector and a list of selected targets
    """
    
    selector: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('selector') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetLoadBalancerTargetServer:
    r"""GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetLoadBalancerTargetServer
    Server where the traffic should be routed through
    """
    
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTargetsHealthStatus:
    listen_port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listen_port') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTargetsServer:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTargets:
    health_status: Optional[list[GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTargetsHealthStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('health_status') }})
    server: Optional[GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTargetsServer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    use_private_ip: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_private_ip') }})
    
class GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnum(str, Enum):
    SERVER = "server"
    LABEL_SELECTOR = "label_selector"
    IP = "ip"


@dataclass_json
@dataclasses.dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTarget:
    type: GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    health_status: Optional[list[GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetHealthStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('health_status') }})
    ip: Optional[GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetIP] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    label_selector: Optional[GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetLabelSelector] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_selector') }})
    server: Optional[GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetLoadBalancerTargetServer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    targets: Optional[list[GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTargetTargets]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    use_private_ip: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_private_ip') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancersID200ApplicationJSONLoadBalancer:
    algorithm: GetLoadBalancersID200ApplicationJSONLoadBalancerAlgorithm = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithm') }})
    created: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    included_traffic: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('included_traffic') }})
    ingoing_traffic: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingoing_traffic') }})
    labels: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    load_balancer_type: GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_balancer_type') }})
    location: GetLoadBalancersID200ApplicationJSONLoadBalancerLocation = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    outgoing_traffic: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('outgoing_traffic') }})
    private_net: list[GetLoadBalancersID200ApplicationJSONLoadBalancerPrivateNet] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_net') }})
    protection: GetLoadBalancersID200ApplicationJSONLoadBalancerProtection = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    public_net: GetLoadBalancersID200ApplicationJSONLoadBalancerPublicNet = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_net') }})
    services: list[GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerService] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    targets: list[GetLoadBalancersID200ApplicationJSONLoadBalancerLoadBalancerTarget] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancersID200ApplicationJSON:
    load_balancer: GetLoadBalancersID200ApplicationJSONLoadBalancer = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_balancer') }})
    

@dataclasses.dataclass
class GetLoadBalancersIDRequest:
    path_params: GetLoadBalancersIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetLoadBalancersIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_load_balancers_id_200_application_json_object: Optional[GetLoadBalancersID200ApplicationJSON] = dataclasses.field(default=None)
    
