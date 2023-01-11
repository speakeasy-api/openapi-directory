import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetServersSortEnum(str, Enum):
    ID = "id"
    ID_ASC = "id:asc"
    ID_DESC = "id:desc"
    NAME = "name"
    NAME_ASC = "name:asc"
    NAME_DESC = "name:desc"
    CREATED = "created"
    CREATED_ASC = "created:asc"
    CREATED_DESC = "created:desc"

class GetServersStatusEnum(str, Enum):
    INITIALIZING = "initializing"
    STARTING = "starting"
    RUNNING = "running"
    STOPPING = "stopping"
    OFF = "off"
    DELETING = "deleting"
    REBUILDING = "rebuilding"
    MIGRATING = "migrating"
    UNKNOWN = "unknown"


@dataclasses.dataclass
class GetServersQueryParams:
    label_selector: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'label_selector', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    sort: Optional[GetServersSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    status: Optional[GetServersStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetServers200ApplicationJSONMetaPagination:
    last_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_page') }})
    next_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page') }})
    page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    per_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    previous_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page') }})
    total_entries: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_entries') }})
    

@dataclass_json
@dataclasses.dataclass
class GetServers200ApplicationJSONMeta:
    pagination: GetServers200ApplicationJSONMetaPagination = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    

@dataclass_json
@dataclasses.dataclass
class GetServers200ApplicationJSONServersDatacenterLocation:
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
class GetServers200ApplicationJSONServersDatacenterServerTypes:
    r"""GetServers200ApplicationJSONServersDatacenterServerTypes
    The Server types the Datacenter can handle
    """
    
    available: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('available') }})
    available_for_migration: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('available_for_migration') }})
    supported: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('supported') }})
    

@dataclass_json
@dataclasses.dataclass
class GetServers200ApplicationJSONServersDatacenter:
    r"""GetServers200ApplicationJSONServersDatacenter
    Datacenter this Resource is located at
    """
    
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    location: GetServers200ApplicationJSONServersDatacenterLocation = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    server_types: GetServers200ApplicationJSONServersDatacenterServerTypes = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_types') }})
    

@dataclass_json
@dataclasses.dataclass
class GetServers200ApplicationJSONServersImageCreatedFrom:
    r"""GetServers200ApplicationJSONServersImageCreatedFrom
    Information about the Server the Image was created from
    """
    
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class GetServers200ApplicationJSONServersImageOsFlavorEnum(str, Enum):
    UBUNTU = "ubuntu"
    CENTOS = "centos"
    DEBIAN = "debian"
    FEDORA = "fedora"
    UNKNOWN = "unknown"


@dataclass_json
@dataclasses.dataclass
class GetServers200ApplicationJSONServersImageProtection:
    r"""GetServers200ApplicationJSONServersImageProtection
    Protection configuration for the Resource
    """
    
    delete: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    
class GetServers200ApplicationJSONServersImageStatusEnum(str, Enum):
    AVAILABLE = "available"
    CREATING = "creating"
    UNAVAILABLE = "unavailable"

class GetServers200ApplicationJSONServersImageTypeEnum(str, Enum):
    SYSTEM = "system"
    APP = "app"
    SNAPSHOT = "snapshot"
    BACKUP = "backup"
    TEMPORARY = "temporary"


@dataclass_json
@dataclasses.dataclass
class GetServers200ApplicationJSONServersImage:
    bound_to: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bound_to') }})
    created: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    created_from: GetServers200ApplicationJSONServersImageCreatedFrom = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_from') }})
    deleted: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    deprecated: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disk_size: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk_size') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image_size: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_size') }})
    labels: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    os_flavor: GetServers200ApplicationJSONServersImageOsFlavorEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('os_flavor') }})
    os_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('os_version') }})
    protection: GetServers200ApplicationJSONServersImageProtection = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    status: GetServers200ApplicationJSONServersImageStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: GetServers200ApplicationJSONServersImageTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    build_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build_id') }})
    rapid_deploy: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rapid_deploy') }})
    
class GetServers200ApplicationJSONServersIsoTypeEnum(str, Enum):
    PUBLIC = "public"
    PRIVATE = "private"


@dataclass_json
@dataclasses.dataclass
class GetServers200ApplicationJSONServersIso:
    r"""GetServers200ApplicationJSONServersIso
    ISO Image that is attached to this Server. Null if no ISO is attached.
    """
    
    deprecated: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: GetServers200ApplicationJSONServersIsoTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class GetServers200ApplicationJSONServersPlacementGroupNullableTypeEnum(str, Enum):
    SPREAD = "spread"


@dataclass_json
@dataclasses.dataclass
class GetServers200ApplicationJSONServersPlacementGroupNullable:
    created: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    servers: list[int] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('servers') }})
    type: GetServers200ApplicationJSONServersPlacementGroupNullableTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class GetServers200ApplicationJSONServersPrivateNet:
    alias_ips: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alias_ips') }})
    ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    mac_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac_address') }})
    network: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    

@dataclass_json
@dataclasses.dataclass
class GetServers200ApplicationJSONServersProtection:
    r"""GetServers200ApplicationJSONServersProtection
    Protection configuration for the Server
    """
    
    delete: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    rebuild: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rebuild') }})
    
class GetServers200ApplicationJSONServersPublicNetServerPublicNetFirewallStatusEnum(str, Enum):
    APPLIED = "applied"
    PENDING = "pending"


@dataclass_json
@dataclasses.dataclass
class GetServers200ApplicationJSONServersPublicNetServerPublicNetFirewall:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    status: Optional[GetServers200ApplicationJSONServersPublicNetServerPublicNetFirewallStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class GetServers200ApplicationJSONServersPublicNetIpv4:
    r"""GetServers200ApplicationJSONServersPublicNetIpv4
    IP address (v4) and its reverse DNS entry of this Server
    """
    
    blocked: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blocked') }})
    dns_ptr: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclasses.dataclass
class GetServers200ApplicationJSONServersPublicNetIpv6DNSPtr:
    dns_ptr: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclasses.dataclass
class GetServers200ApplicationJSONServersPublicNetIpv6:
    r"""GetServers200ApplicationJSONServersPublicNetIpv6
    IPv6 network assigned to this Server and its reverse DNS entry
    """
    
    blocked: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blocked') }})
    dns_ptr: list[GetServers200ApplicationJSONServersPublicNetIpv6DNSPtr] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclasses.dataclass
class GetServers200ApplicationJSONServersPublicNet:
    r"""GetServers200ApplicationJSONServersPublicNet
    Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`
    """
    
    floating_ips: list[int] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('floating_ips') }})
    ipv4: GetServers200ApplicationJSONServersPublicNetIpv4 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv4') }})
    ipv6: GetServers200ApplicationJSONServersPublicNetIpv6 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv6') }})
    firewalls: Optional[list[GetServers200ApplicationJSONServersPublicNetServerPublicNetFirewall]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firewalls') }})
    
class GetServers200ApplicationJSONServersServerTypeCPUTypeEnum(str, Enum):
    SHARED = "shared"
    DEDICATED = "dedicated"


@dataclass_json
@dataclasses.dataclass
class GetServers200ApplicationJSONServersServerTypePricesPriceHourly:
    r"""GetServers200ApplicationJSONServersServerTypePricesPriceHourly
    Hourly costs for a Server type in this Location
    """
    
    gross: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclasses.dataclass
class GetServers200ApplicationJSONServersServerTypePricesPriceMonthly:
    r"""GetServers200ApplicationJSONServersServerTypePricesPriceMonthly
    Monthly costs for a Server type in this Location
    """
    
    gross: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclasses.dataclass
class GetServers200ApplicationJSONServersServerTypePrices:
    location: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    price_hourly: GetServers200ApplicationJSONServersServerTypePricesPriceHourly = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_hourly') }})
    price_monthly: GetServers200ApplicationJSONServersServerTypePricesPriceMonthly = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_monthly') }})
    
class GetServers200ApplicationJSONServersServerTypeStorageTypeEnum(str, Enum):
    LOCAL = "local"
    NETWORK = "network"


@dataclass_json
@dataclasses.dataclass
class GetServers200ApplicationJSONServersServerType:
    r"""GetServers200ApplicationJSONServersServerType
    Type of Server - determines how much ram, disk and cpu a Server has
    """
    
    cores: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cores') }})
    cpu_type: GetServers200ApplicationJSONServersServerTypeCPUTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpu_type') }})
    deprecated: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disk: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    memory: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    prices: list[GetServers200ApplicationJSONServersServerTypePrices] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prices') }})
    storage_type: GetServers200ApplicationJSONServersServerTypeStorageTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('storage_type') }})
    
class GetServers200ApplicationJSONServersStatusEnum(str, Enum):
    RUNNING = "running"
    INITIALIZING = "initializing"
    STARTING = "starting"
    STOPPING = "stopping"
    OFF = "off"
    DELETING = "deleting"
    MIGRATING = "migrating"
    REBUILDING = "rebuilding"
    UNKNOWN = "unknown"


@dataclass_json
@dataclasses.dataclass
class GetServers200ApplicationJSONServers:
    backup_window: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('backup_window') }})
    created: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    datacenter: GetServers200ApplicationJSONServersDatacenter = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datacenter') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image: GetServers200ApplicationJSONServersImage = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    included_traffic: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('included_traffic') }})
    ingoing_traffic: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingoing_traffic') }})
    iso: GetServers200ApplicationJSONServersIso = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso') }})
    labels: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    locked: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('locked') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    outgoing_traffic: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('outgoing_traffic') }})
    primary_disk_size: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_disk_size') }})
    private_net: list[GetServers200ApplicationJSONServersPrivateNet] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_net') }})
    protection: GetServers200ApplicationJSONServersProtection = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    public_net: GetServers200ApplicationJSONServersPublicNet = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_net') }})
    rescue_enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rescue_enabled') }})
    server_type: GetServers200ApplicationJSONServersServerType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_type') }})
    status: GetServers200ApplicationJSONServersStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    load_balancers: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_balancers') }})
    placement_group: Optional[GetServers200ApplicationJSONServersPlacementGroupNullable] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placement_group') }})
    volumes: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    

@dataclass_json
@dataclasses.dataclass
class GetServers200ApplicationJSON:
    servers: list[GetServers200ApplicationJSONServers] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('servers') }})
    meta: Optional[GetServers200ApplicationJSONMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class GetServersRequest:
    query_params: GetServersQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetServersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_servers_200_application_json_object: Optional[GetServers200ApplicationJSON] = dataclasses.field(default=None)
    
