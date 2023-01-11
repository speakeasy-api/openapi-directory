import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class PutServersIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PutServersIDUpdateServerRequest:
    labels: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PutServersID200ApplicationJSONServerDatacenterLocation:
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
class PutServersID200ApplicationJSONServerDatacenterServerTypes:
    r"""PutServersID200ApplicationJSONServerDatacenterServerTypes
    The Server types the Datacenter can handle
    """
    
    available: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('available') }})
    available_for_migration: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('available_for_migration') }})
    supported: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('supported') }})
    

@dataclass_json
@dataclasses.dataclass
class PutServersID200ApplicationJSONServerDatacenter:
    r"""PutServersID200ApplicationJSONServerDatacenter
    Datacenter this Resource is located at
    """
    
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    location: PutServersID200ApplicationJSONServerDatacenterLocation = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    server_types: PutServersID200ApplicationJSONServerDatacenterServerTypes = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_types') }})
    

@dataclass_json
@dataclasses.dataclass
class PutServersID200ApplicationJSONServerImageCreatedFrom:
    r"""PutServersID200ApplicationJSONServerImageCreatedFrom
    Information about the Server the Image was created from
    """
    
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class PutServersID200ApplicationJSONServerImageOsFlavorEnum(str, Enum):
    UBUNTU = "ubuntu"
    CENTOS = "centos"
    DEBIAN = "debian"
    FEDORA = "fedora"
    UNKNOWN = "unknown"


@dataclass_json
@dataclasses.dataclass
class PutServersID200ApplicationJSONServerImageProtection:
    r"""PutServersID200ApplicationJSONServerImageProtection
    Protection configuration for the Resource
    """
    
    delete: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    
class PutServersID200ApplicationJSONServerImageStatusEnum(str, Enum):
    AVAILABLE = "available"
    CREATING = "creating"
    UNAVAILABLE = "unavailable"

class PutServersID200ApplicationJSONServerImageTypeEnum(str, Enum):
    SYSTEM = "system"
    APP = "app"
    SNAPSHOT = "snapshot"
    BACKUP = "backup"
    TEMPORARY = "temporary"


@dataclass_json
@dataclasses.dataclass
class PutServersID200ApplicationJSONServerImage:
    bound_to: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bound_to') }})
    created: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    created_from: PutServersID200ApplicationJSONServerImageCreatedFrom = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_from') }})
    deleted: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    deprecated: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disk_size: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk_size') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image_size: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_size') }})
    labels: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    os_flavor: PutServersID200ApplicationJSONServerImageOsFlavorEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('os_flavor') }})
    os_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('os_version') }})
    protection: PutServersID200ApplicationJSONServerImageProtection = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    status: PutServersID200ApplicationJSONServerImageStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: PutServersID200ApplicationJSONServerImageTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    build_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build_id') }})
    rapid_deploy: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rapid_deploy') }})
    
class PutServersID200ApplicationJSONServerIsoTypeEnum(str, Enum):
    PUBLIC = "public"
    PRIVATE = "private"


@dataclass_json
@dataclasses.dataclass
class PutServersID200ApplicationJSONServerIso:
    r"""PutServersID200ApplicationJSONServerIso
    ISO Image that is attached to this Server. Null if no ISO is attached.
    """
    
    deprecated: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: PutServersID200ApplicationJSONServerIsoTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PutServersID200ApplicationJSONServerPlacementGroupNullableTypeEnum(str, Enum):
    SPREAD = "spread"


@dataclass_json
@dataclasses.dataclass
class PutServersID200ApplicationJSONServerPlacementGroupNullable:
    created: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    servers: list[int] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('servers') }})
    type: PutServersID200ApplicationJSONServerPlacementGroupNullableTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class PutServersID200ApplicationJSONServerPrivateNet:
    alias_ips: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alias_ips') }})
    ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    mac_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac_address') }})
    network: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    

@dataclass_json
@dataclasses.dataclass
class PutServersID200ApplicationJSONServerProtection:
    r"""PutServersID200ApplicationJSONServerProtection
    Protection configuration for the Server
    """
    
    delete: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    rebuild: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rebuild') }})
    
class PutServersID200ApplicationJSONServerPublicNetServerPublicNetFirewallStatusEnum(str, Enum):
    APPLIED = "applied"
    PENDING = "pending"


@dataclass_json
@dataclasses.dataclass
class PutServersID200ApplicationJSONServerPublicNetServerPublicNetFirewall:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    status: Optional[PutServersID200ApplicationJSONServerPublicNetServerPublicNetFirewallStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class PutServersID200ApplicationJSONServerPublicNetIpv4:
    r"""PutServersID200ApplicationJSONServerPublicNetIpv4
    IP address (v4) and its reverse DNS entry of this Server
    """
    
    blocked: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blocked') }})
    dns_ptr: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclasses.dataclass
class PutServersID200ApplicationJSONServerPublicNetIpv6DNSPtr:
    dns_ptr: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclasses.dataclass
class PutServersID200ApplicationJSONServerPublicNetIpv6:
    r"""PutServersID200ApplicationJSONServerPublicNetIpv6
    IPv6 network assigned to this Server and its reverse DNS entry
    """
    
    blocked: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blocked') }})
    dns_ptr: list[PutServersID200ApplicationJSONServerPublicNetIpv6DNSPtr] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclasses.dataclass
class PutServersID200ApplicationJSONServerPublicNet:
    r"""PutServersID200ApplicationJSONServerPublicNet
    Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`
    """
    
    floating_ips: list[int] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('floating_ips') }})
    ipv4: PutServersID200ApplicationJSONServerPublicNetIpv4 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv4') }})
    ipv6: PutServersID200ApplicationJSONServerPublicNetIpv6 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv6') }})
    firewalls: Optional[list[PutServersID200ApplicationJSONServerPublicNetServerPublicNetFirewall]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firewalls') }})
    
class PutServersID200ApplicationJSONServerServerTypeCPUTypeEnum(str, Enum):
    SHARED = "shared"
    DEDICATED = "dedicated"


@dataclass_json
@dataclasses.dataclass
class PutServersID200ApplicationJSONServerServerTypePricesPriceHourly:
    r"""PutServersID200ApplicationJSONServerServerTypePricesPriceHourly
    Hourly costs for a Server type in this Location
    """
    
    gross: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclasses.dataclass
class PutServersID200ApplicationJSONServerServerTypePricesPriceMonthly:
    r"""PutServersID200ApplicationJSONServerServerTypePricesPriceMonthly
    Monthly costs for a Server type in this Location
    """
    
    gross: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclasses.dataclass
class PutServersID200ApplicationJSONServerServerTypePrices:
    location: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    price_hourly: PutServersID200ApplicationJSONServerServerTypePricesPriceHourly = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_hourly') }})
    price_monthly: PutServersID200ApplicationJSONServerServerTypePricesPriceMonthly = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_monthly') }})
    
class PutServersID200ApplicationJSONServerServerTypeStorageTypeEnum(str, Enum):
    LOCAL = "local"
    NETWORK = "network"


@dataclass_json
@dataclasses.dataclass
class PutServersID200ApplicationJSONServerServerType:
    r"""PutServersID200ApplicationJSONServerServerType
    Type of Server - determines how much ram, disk and cpu a Server has
    """
    
    cores: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cores') }})
    cpu_type: PutServersID200ApplicationJSONServerServerTypeCPUTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpu_type') }})
    deprecated: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disk: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    memory: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    prices: list[PutServersID200ApplicationJSONServerServerTypePrices] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prices') }})
    storage_type: PutServersID200ApplicationJSONServerServerTypeStorageTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('storage_type') }})
    
class PutServersID200ApplicationJSONServerStatusEnum(str, Enum):
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
class PutServersID200ApplicationJSONServer:
    backup_window: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('backup_window') }})
    created: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    datacenter: PutServersID200ApplicationJSONServerDatacenter = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datacenter') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image: PutServersID200ApplicationJSONServerImage = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    included_traffic: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('included_traffic') }})
    ingoing_traffic: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingoing_traffic') }})
    iso: PutServersID200ApplicationJSONServerIso = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso') }})
    labels: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    locked: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('locked') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    outgoing_traffic: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('outgoing_traffic') }})
    primary_disk_size: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_disk_size') }})
    private_net: list[PutServersID200ApplicationJSONServerPrivateNet] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_net') }})
    protection: PutServersID200ApplicationJSONServerProtection = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    public_net: PutServersID200ApplicationJSONServerPublicNet = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_net') }})
    rescue_enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rescue_enabled') }})
    server_type: PutServersID200ApplicationJSONServerServerType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_type') }})
    status: PutServersID200ApplicationJSONServerStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    load_balancers: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_balancers') }})
    placement_group: Optional[PutServersID200ApplicationJSONServerPlacementGroupNullable] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placement_group') }})
    volumes: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    

@dataclass_json
@dataclasses.dataclass
class PutServersID200ApplicationJSON:
    server: Optional[PutServersID200ApplicationJSONServer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    

@dataclasses.dataclass
class PutServersIDRequest:
    path_params: PutServersIDPathParams = dataclasses.field()
    request: Optional[PutServersIDUpdateServerRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutServersIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    put_servers_id_200_application_json_object: Optional[PutServersID200ApplicationJSON] = dataclasses.field(default=None)
    
