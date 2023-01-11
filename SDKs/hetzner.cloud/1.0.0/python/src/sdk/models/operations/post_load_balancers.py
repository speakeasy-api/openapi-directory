import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithmTypeEnum(str, Enum):
    ROUND_ROBIN = "round_robin"
    LEAST_CONNECTIONS = "least_connections"


@dataclass_json
@dataclasses.dataclass
class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithm:
    r"""PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithm
    Algorithm of the Load Balancer
    """
    
    type: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithmTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancersCreateLoadBalancerRequestLabels:
    r"""PostLoadBalancersCreateLoadBalancerRequestLabels
    User-defined labels (key-value pairs)
    """
    
    labelkey: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelkey') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP:
    r"""PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP
    Additional configuration for protocol http
    """
    
    domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    response: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    status_codes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_codes') }})
    tls: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tls') }})
    
class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum(str, Enum):
    TCP = "tcp"
    HTTP = "http"


@dataclass_json
@dataclasses.dataclass
class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck:
    r"""PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck
    Service health check
    """
    
    interval: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interval') }})
    port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    protocol: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    retries: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('retries') }})
    timeout: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    http: Optional[PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceHTTP:
    r"""PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceHTTP
    Configuration option for protocols http and https
    """
    
    cookie_lifetime: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookie_lifetime') }})
    cookie_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookie_name') }})
    certificates: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificates') }})
    redirect_http: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect_http') }})
    sticky_sessions: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sticky_sessions') }})
    
class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceProtocolEnum(str, Enum):
    TCP = "tcp"
    HTTP = "http"
    HTTPS = "https"


@dataclass_json
@dataclasses.dataclass
class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService:
    destination_port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_port') }})
    health_check: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('health_check') }})
    listen_port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('listen_port') }})
    protocol: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    proxyprotocol: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxyprotocol') }})
    http: Optional[PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceHTTP] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetHealthStatus:
    listen_port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listen_port') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetIP:
    r"""PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetIP
    IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
    """
    
    ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLabelSelector:
    r"""PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLabelSelector
    Label selector and a list of selected targets
    """
    
    selector: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('selector') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetServer:
    r"""PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetServer
    Server where the traffic should be routed through
    """
    
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsHealthStatus:
    listen_port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listen_port') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsServer:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargets:
    health_status: Optional[list[PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsHealthStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('health_status') }})
    server: Optional[PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsServer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    use_private_ip: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_private_ip') }})
    
class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTypeEnum(str, Enum):
    SERVER = "server"
    LABEL_SELECTOR = "label_selector"
    IP = "ip"


@dataclass_json
@dataclasses.dataclass
class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget:
    type: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    health_status: Optional[list[PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetHealthStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('health_status') }})
    ip: Optional[PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetIP] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    label_selector: Optional[PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLabelSelector] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_selector') }})
    server: Optional[PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetServer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    targets: Optional[list[PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargets]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    use_private_ip: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_private_ip') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancersCreateLoadBalancerRequest:
    algorithm: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithm = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithm') }})
    load_balancer_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_balancer_type') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    labels: Optional[PostLoadBalancersCreateLoadBalancerRequestLabels] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    network: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    network_zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_zone') }})
    public_interface: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_interface') }})
    services: Optional[list[PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    targets: Optional[list[PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancers201ApplicationJSONActionError:
    r"""PostLoadBalancers201ApplicationJSONActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancers201ApplicationJSONActionResources:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostLoadBalancers201ApplicationJSONActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class PostLoadBalancers201ApplicationJSONAction:
    command: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostLoadBalancers201ApplicationJSONActionError = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: list[PostLoadBalancers201ApplicationJSONActionResources] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostLoadBalancers201ApplicationJSONActionStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
class PostLoadBalancers201ApplicationJSONLoadBalancerAlgorithmTypeEnum(str, Enum):
    ROUND_ROBIN = "round_robin"
    LEAST_CONNECTIONS = "least_connections"


@dataclass_json
@dataclasses.dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerAlgorithm:
    r"""PostLoadBalancers201ApplicationJSONLoadBalancerAlgorithm
    Algorithm of the Load Balancer
    """
    
    type: PostLoadBalancers201ApplicationJSONLoadBalancerAlgorithmTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceHourly:
    r"""PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceHourly
    Hourly costs for a Resource in this Location
    """
    
    gross: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceMonthly:
    r"""PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceMonthly
    Monthly costs for a Resource in this Location
    """
    
    gross: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTypePrices:
    location: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    price_hourly: PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceHourly = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_hourly') }})
    price_monthly: PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceMonthly = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_monthly') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerType:
    deprecated: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    max_assigned_certificates: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_assigned_certificates') }})
    max_connections: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_connections') }})
    max_services: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_services') }})
    max_targets: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_targets') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    prices: list[PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTypePrices] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prices') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerLocation:
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
class PostLoadBalancers201ApplicationJSONLoadBalancerPrivateNet:
    ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    network: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerProtection:
    r"""PostLoadBalancers201ApplicationJSONLoadBalancerProtection
    Protection configuration for the Resource
    """
    
    delete: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerPublicNetIpv4:
    r"""PostLoadBalancers201ApplicationJSONLoadBalancerPublicNetIpv4
    IP address (v4)
    """
    
    dns_ptr: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerPublicNetIpv6:
    r"""PostLoadBalancers201ApplicationJSONLoadBalancerPublicNetIpv6
    IP address (v6)
    """
    
    dns_ptr: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerPublicNet:
    r"""PostLoadBalancers201ApplicationJSONLoadBalancerPublicNet
    Public network information
    """
    
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    ipv4: PostLoadBalancers201ApplicationJSONLoadBalancerPublicNetIpv4 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv4') }})
    ipv6: PostLoadBalancers201ApplicationJSONLoadBalancerPublicNetIpv6 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv6') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP:
    r"""PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP
    Additional configuration for protocol http
    """
    
    domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    response: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    status_codes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_codes') }})
    tls: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tls') }})
    
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum(str, Enum):
    TCP = "tcp"
    HTTP = "http"


@dataclass_json
@dataclasses.dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck:
    r"""PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck
    Service health check
    """
    
    interval: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interval') }})
    port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    protocol: PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    retries: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('retries') }})
    timeout: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    http: Optional[PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceHTTP:
    r"""PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceHTTP
    Configuration option for protocols http and https
    """
    
    cookie_lifetime: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookie_lifetime') }})
    cookie_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookie_name') }})
    certificates: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificates') }})
    redirect_http: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect_http') }})
    sticky_sessions: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sticky_sessions') }})
    
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceProtocolEnum(str, Enum):
    TCP = "tcp"
    HTTP = "http"
    HTTPS = "https"


@dataclass_json
@dataclasses.dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerService:
    destination_port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_port') }})
    health_check: PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('health_check') }})
    listen_port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('listen_port') }})
    protocol: PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    proxyprotocol: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxyprotocol') }})
    http: Optional[PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceHTTP] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetHealthStatus:
    listen_port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listen_port') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetIP:
    r"""PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetIP
    IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
    """
    
    ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetLabelSelector:
    r"""PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetLabelSelector
    Label selector and a list of selected targets
    """
    
    selector: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('selector') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetLoadBalancerTargetServer:
    r"""PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetLoadBalancerTargetServer
    Server where the traffic should be routed through
    """
    
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTargetsHealthStatus:
    listen_port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listen_port') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTargetsServer:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTargets:
    health_status: Optional[list[PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTargetsHealthStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('health_status') }})
    server: Optional[PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTargetsServer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    use_private_ip: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_private_ip') }})
    
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnum(str, Enum):
    SERVER = "server"
    LABEL_SELECTOR = "label_selector"
    IP = "ip"


@dataclass_json
@dataclasses.dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTarget:
    type: PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    health_status: Optional[list[PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetHealthStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('health_status') }})
    ip: Optional[PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetIP] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    label_selector: Optional[PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetLabelSelector] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_selector') }})
    server: Optional[PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetLoadBalancerTargetServer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    targets: Optional[list[PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTargets]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    use_private_ip: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_private_ip') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancers201ApplicationJSONLoadBalancer:
    algorithm: PostLoadBalancers201ApplicationJSONLoadBalancerAlgorithm = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithm') }})
    created: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    included_traffic: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('included_traffic') }})
    ingoing_traffic: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingoing_traffic') }})
    labels: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    load_balancer_type: PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_balancer_type') }})
    location: PostLoadBalancers201ApplicationJSONLoadBalancerLocation = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    outgoing_traffic: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('outgoing_traffic') }})
    private_net: list[PostLoadBalancers201ApplicationJSONLoadBalancerPrivateNet] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_net') }})
    protection: PostLoadBalancers201ApplicationJSONLoadBalancerProtection = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    public_net: PostLoadBalancers201ApplicationJSONLoadBalancerPublicNet = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_net') }})
    services: list[PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerService] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    targets: list[PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTarget] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLoadBalancers201ApplicationJSON:
    action: PostLoadBalancers201ApplicationJSONAction = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    load_balancer: PostLoadBalancers201ApplicationJSONLoadBalancer = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_balancer') }})
    

@dataclasses.dataclass
class PostLoadBalancersRequest:
    request: Optional[PostLoadBalancersCreateLoadBalancerRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostLoadBalancersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_load_balancers_201_application_json_object: Optional[PostLoadBalancers201ApplicationJSON] = dataclasses.field(default=None)
    
