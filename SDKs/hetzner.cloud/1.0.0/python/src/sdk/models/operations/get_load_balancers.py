import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetLoadBalancersSortEnum(str, Enum):
    ID = "id"
    ID_ASC = "id:asc"
    ID_DESC = "id:desc"
    NAME = "name"
    NAME_ASC = "name:asc"
    NAME_DESC = "name:desc"
    CREATED = "created"
    CREATED_ASC = "created:asc"
    CREATED_DESC = "created:desc"


@dataclasses.dataclass
class GetLoadBalancersQueryParams:
    label_selector: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'label_selector', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    sort: Optional[GetLoadBalancersSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    
class GetLoadBalancers200ApplicationJSONLoadBalancersAlgorithmTypeEnum(str, Enum):
    ROUND_ROBIN = "round_robin"
    LEAST_CONNECTIONS = "least_connections"


@dataclass_json
@dataclasses.dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersAlgorithm:
    r"""GetLoadBalancers200ApplicationJSONLoadBalancersAlgorithm
    Algorithm of the Load Balancer
    """
    
    type: GetLoadBalancers200ApplicationJSONLoadBalancersAlgorithmTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTypePricesPriceHourly:
    r"""GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTypePricesPriceHourly
    Hourly costs for a Resource in this Location
    """
    
    gross: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTypePricesPriceMonthly:
    r"""GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTypePricesPriceMonthly
    Monthly costs for a Resource in this Location
    """
    
    gross: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTypePrices:
    location: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    price_hourly: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTypePricesPriceHourly = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_hourly') }})
    price_monthly: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTypePricesPriceMonthly = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_monthly') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerType:
    deprecated: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    max_assigned_certificates: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_assigned_certificates') }})
    max_connections: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_connections') }})
    max_services: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_services') }})
    max_targets: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_targets') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    prices: list[GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTypePrices] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prices') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLocation:
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
class GetLoadBalancers200ApplicationJSONLoadBalancersPrivateNet:
    ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    network: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersProtection:
    r"""GetLoadBalancers200ApplicationJSONLoadBalancersProtection
    Protection configuration for the Resource
    """
    
    delete: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersPublicNetIpv4:
    r"""GetLoadBalancers200ApplicationJSONLoadBalancersPublicNetIpv4
    IP address (v4)
    """
    
    dns_ptr: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersPublicNetIpv6:
    r"""GetLoadBalancers200ApplicationJSONLoadBalancersPublicNetIpv6
    IP address (v6)
    """
    
    dns_ptr: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersPublicNet:
    r"""GetLoadBalancers200ApplicationJSONLoadBalancersPublicNet
    Public network information
    """
    
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    ipv4: GetLoadBalancers200ApplicationJSONLoadBalancersPublicNetIpv4 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv4') }})
    ipv6: GetLoadBalancers200ApplicationJSONLoadBalancersPublicNetIpv6 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv6') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP:
    r"""GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP
    Additional configuration for protocol http
    """
    
    domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    response: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    status_codes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_codes') }})
    tls: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tls') }})
    
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum(str, Enum):
    TCP = "tcp"
    HTTP = "http"


@dataclass_json
@dataclasses.dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheck:
    r"""GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheck
    Service health check
    """
    
    interval: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interval') }})
    port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    protocol: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    retries: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('retries') }})
    timeout: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    http: Optional[GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceHTTP:
    r"""GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceHTTP
    Configuration option for protocols http and https
    """
    
    cookie_lifetime: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookie_lifetime') }})
    cookie_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookie_name') }})
    certificates: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificates') }})
    redirect_http: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect_http') }})
    sticky_sessions: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sticky_sessions') }})
    
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceProtocolEnum(str, Enum):
    TCP = "tcp"
    HTTP = "http"
    HTTPS = "https"


@dataclass_json
@dataclasses.dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerService:
    destination_port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_port') }})
    health_check: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheck = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('health_check') }})
    listen_port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('listen_port') }})
    protocol: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    proxyprotocol: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxyprotocol') }})
    http: Optional[GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceHTTP] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetHealthStatus:
    listen_port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listen_port') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetIP:
    r"""GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetIP
    IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
    """
    
    ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetLabelSelector:
    r"""GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetLabelSelector
    Label selector and a list of selected targets
    """
    
    selector: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('selector') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetLoadBalancerTargetServer:
    r"""GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetLoadBalancerTargetServer
    Server where the traffic should be routed through
    """
    
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetTargetsHealthStatus:
    listen_port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listen_port') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetTargetsServer:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetTargets:
    health_status: Optional[list[GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetTargetsHealthStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('health_status') }})
    server: Optional[GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetTargetsServer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    use_private_ip: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_private_ip') }})
    
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetTypeEnum(str, Enum):
    SERVER = "server"
    LABEL_SELECTOR = "label_selector"
    IP = "ip"


@dataclass_json
@dataclasses.dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTarget:
    type: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    health_status: Optional[list[GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetHealthStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('health_status') }})
    ip: Optional[GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetIP] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    label_selector: Optional[GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetLabelSelector] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_selector') }})
    server: Optional[GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetLoadBalancerTargetServer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    targets: Optional[list[GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetTargets]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    use_private_ip: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_private_ip') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancers200ApplicationJSONLoadBalancers:
    algorithm: GetLoadBalancers200ApplicationJSONLoadBalancersAlgorithm = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithm') }})
    created: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    included_traffic: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('included_traffic') }})
    ingoing_traffic: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingoing_traffic') }})
    labels: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    load_balancer_type: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_balancer_type') }})
    location: GetLoadBalancers200ApplicationJSONLoadBalancersLocation = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    outgoing_traffic: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('outgoing_traffic') }})
    private_net: list[GetLoadBalancers200ApplicationJSONLoadBalancersPrivateNet] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_net') }})
    protection: GetLoadBalancers200ApplicationJSONLoadBalancersProtection = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    public_net: GetLoadBalancers200ApplicationJSONLoadBalancersPublicNet = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_net') }})
    services: list[GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerService] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    targets: list[GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTarget] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancers200ApplicationJSONMetaPagination:
    last_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_page') }})
    next_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page') }})
    page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    per_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    previous_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page') }})
    total_entries: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_entries') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancers200ApplicationJSONMeta:
    pagination: GetLoadBalancers200ApplicationJSONMetaPagination = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLoadBalancers200ApplicationJSON:
    load_balancers: list[GetLoadBalancers200ApplicationJSONLoadBalancers] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_balancers') }})
    meta: Optional[GetLoadBalancers200ApplicationJSONMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class GetLoadBalancersRequest:
    query_params: GetLoadBalancersQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetLoadBalancersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_load_balancers_200_application_json_object: Optional[GetLoadBalancers200ApplicationJSON] = dataclasses.field(default=None)
    
