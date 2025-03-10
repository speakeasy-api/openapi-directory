"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Any, Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PutServersIDUpdateServerRequest:
    
    labels: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('labels'), 'exclude': lambda f: f is None }})
    r"""User-defined labels (key-value pairs)"""  
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name'), 'exclude': lambda f: f is None }})
    r"""New name to set"""  
    

@dataclasses.dataclass
class PutServersIDRequest:
    
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    r"""ID of the Server"""  
    request_body: Optional[PutServersIDUpdateServerRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PutServersID200ApplicationJSONServerDatacenterLocation:
    
    city: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('city') }})
    r"""City the Location is closest to"""  
    country: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('country') }})
    r"""ISO 3166-1 alpha-2 code of the country the Location resides in"""  
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('description') }})
    r"""Description of the Location"""  
    id: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id') }})
    r"""ID of the Location"""  
    latitude: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('latitude') }})
    r"""Latitude of the city closest to the Location"""  
    longitude: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('longitude') }})
    r"""Longitude of the city closest to the Location"""  
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name') }})
    r"""Unique identifier of the Location"""  
    network_zone: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('network_zone') }})
    r"""Name of network zone this Location resides in"""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PutServersID200ApplicationJSONServerDatacenterServerTypes:
    r"""The Server types the Datacenter can handle"""
    
    available: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('available') }})
    r"""IDs of Server types that are supported and for which the Datacenter has enough resources left"""  
    available_for_migration: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('available_for_migration') }})
    r"""IDs of Server types that are supported and for which the Datacenter has enough resources left"""  
    supported: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('supported') }})
    r"""IDs of Server types that are supported in the Datacenter"""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PutServersID200ApplicationJSONServerDatacenter:
    r"""Datacenter this Resource is located at"""
    
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('description') }})
    r"""Description of the Datacenter"""  
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id') }})
    r"""ID of the Resource"""  
    location: PutServersID200ApplicationJSONServerDatacenterLocation = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('location') }})  
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name') }})
    r"""Unique identifier of the Datacenter"""  
    server_types: PutServersID200ApplicationJSONServerDatacenterServerTypes = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('server_types') }})
    r"""The Server types the Datacenter can handle"""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PutServersID200ApplicationJSONServerImageCreatedFrom:
    r"""Information about the Server the Image was created from"""
    
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id') }})
    r"""ID of the Server the Image was created from"""  
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name') }})
    r"""Server name at the time the Image was created"""  
    
class PutServersID200ApplicationJSONServerImageOsFlavorEnum(str, Enum):
    r"""Flavor of operating system contained in the Image"""
    UBUNTU = 'ubuntu'
    CENTOS = 'centos'
    DEBIAN = 'debian'
    FEDORA = 'fedora'
    UNKNOWN = 'unknown'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PutServersID200ApplicationJSONServerImageProtection:
    r"""Protection configuration for the Resource"""
    
    delete: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('delete') }})
    r"""If true, prevents the Resource from being deleted"""  
    
class PutServersID200ApplicationJSONServerImageStatusEnum(str, Enum):
    r"""Whether the Image can be used or if it's still being created or unavailable"""
    AVAILABLE = 'available'
    CREATING = 'creating'
    UNAVAILABLE = 'unavailable'

class PutServersID200ApplicationJSONServerImageTypeEnum(str, Enum):
    r"""Type of the Image"""
    SYSTEM = 'system'
    APP = 'app'
    SNAPSHOT = 'snapshot'
    BACKUP = 'backup'
    TEMPORARY = 'temporary'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PutServersID200ApplicationJSONServerImage:
    
    bound_to: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('bound_to') }})
    r"""ID of Server the Image is bound to. Only set for Images of type `backup`."""  
    created: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('created') }})
    r"""Point in time when the Resource was created (in ISO-8601 format)"""  
    created_from: PutServersID200ApplicationJSONServerImageCreatedFrom = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('created_from') }})
    r"""Information about the Server the Image was created from"""  
    deleted: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('deleted') }})
    r"""Point in time where the Image was deleted (in ISO-8601 format)"""  
    deprecated: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('deprecated') }})
    r"""Point in time when the Image is considered to be deprecated (in ISO-8601 format)"""  
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('description') }})
    r"""Description of the Image"""  
    disk_size: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('disk_size') }})
    r"""Size of the disk contained in the Image in GB"""  
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id') }})
    r"""ID of the Resource"""  
    image_size: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('image_size') }})
    r"""Size of the Image file in our storage in GB. For snapshot Images this is the value relevant for calculating costs for the Image."""  
    labels: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('labels') }})
    r"""User-defined labels (key-value pairs)"""  
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name') }})
    r"""Unique identifier of the Image. This value is only set for system Images."""  
    os_flavor: PutServersID200ApplicationJSONServerImageOsFlavorEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('os_flavor') }})
    r"""Flavor of operating system contained in the Image"""  
    os_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('os_version') }})
    r"""Operating system version"""  
    protection: PutServersID200ApplicationJSONServerImageProtection = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('protection') }})
    r"""Protection configuration for the Resource"""  
    status: PutServersID200ApplicationJSONServerImageStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('status') }})
    r"""Whether the Image can be used or if it's still being created or unavailable"""  
    type: PutServersID200ApplicationJSONServerImageTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('type') }})
    r"""Type of the Image"""  
    rapid_deploy: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('rapid_deploy'), 'exclude': lambda f: f is None }})
    r"""Indicates that rapid deploy of the Image is available"""  
    
class PutServersID200ApplicationJSONServerIsoTypeEnum(str, Enum):
    r"""Type of the ISO"""
    PUBLIC = 'public'
    PRIVATE = 'private'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PutServersID200ApplicationJSONServerIso:
    r"""ISO Image that is attached to this Server. Null if no ISO is attached."""
    
    deprecated: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('deprecated') }})
    r"""ISO 8601 timestamp of deprecation, null if ISO is still available. After the deprecation time it will no longer be possible to attach the ISO to Servers."""  
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('description') }})
    r"""Description of the ISO"""  
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id') }})
    r"""ID of the Resource"""  
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name') }})
    r"""Unique identifier of the ISO. Only set for public ISOs"""  
    type: PutServersID200ApplicationJSONServerIsoTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('type') }})
    r"""Type of the ISO"""  
    
class PutServersID200ApplicationJSONServerPlacementGroupNullableTypeEnum(str, Enum):
    r"""Type of the Placement Group"""
    SPREAD = 'spread'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PutServersID200ApplicationJSONServerPlacementGroupNullable:
    
    created: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('created') }})
    r"""Point in time when the Resource was created (in ISO-8601 format)"""  
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id') }})
    r"""ID of the Resource"""  
    labels: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('labels') }})
    r"""User-defined labels (key-value pairs)"""  
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name') }})
    r"""Name of the Resource. Must be unique per Project."""  
    servers: list[int] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('servers') }})
    r"""Array of IDs of Servers that are part of this Placement Group"""  
    type: PutServersID200ApplicationJSONServerPlacementGroupNullableTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('type') }})
    r"""Type of the Placement Group"""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PutServersID200ApplicationJSONServerPrivateNet:
    
    alias_ips: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('alias_ips'), 'exclude': lambda f: f is None }})  
    ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ip'), 'exclude': lambda f: f is None }})  
    mac_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('mac_address'), 'exclude': lambda f: f is None }})  
    network: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('network'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PutServersID200ApplicationJSONServerProtection:
    r"""Protection configuration for the Server"""
    
    delete: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('delete') }})
    r"""If true, prevents the Server from being deleted"""  
    rebuild: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('rebuild') }})
    r"""If true, prevents the Server from being rebuilt"""  
    
class PutServersID200ApplicationJSONServerPublicNetServerPublicNetFirewallStatusEnum(str, Enum):
    r"""Status of the Firewall on the Server"""
    APPLIED = 'applied'
    PENDING = 'pending'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PutServersID200ApplicationJSONServerPublicNetServerPublicNetFirewall:
    
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id'), 'exclude': lambda f: f is None }})
    r"""ID of the Resource"""  
    status: Optional[PutServersID200ApplicationJSONServerPublicNetServerPublicNetFirewallStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('status'), 'exclude': lambda f: f is None }})
    r"""Status of the Firewall on the Server"""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PutServersID200ApplicationJSONServerPublicNetIpv4:
    r"""IP address (v4) and its reverse DNS entry of this Server"""
    
    blocked: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('blocked') }})
    r"""If the IP is blocked by our anti abuse dept"""  
    dns_ptr: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('dns_ptr') }})
    r"""Reverse DNS PTR entry for the IPv4 addresses of this Server"""  
    ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ip') }})
    r"""IP address (v4) of this Server"""  
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id'), 'exclude': lambda f: f is None }})
    r"""ID of the Resource"""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PutServersID200ApplicationJSONServerPublicNetIpv6DNSPtr:
    
    dns_ptr: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('dns_ptr') }})
    r"""DNS pointer for the specific IP address"""  
    ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ip') }})
    r"""Single IPv6 address of this Server for which the reverse DNS entry has been set up"""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PutServersID200ApplicationJSONServerPublicNetIpv6:
    r"""IPv6 network assigned to this Server and its reverse DNS entry"""
    
    blocked: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('blocked') }})
    r"""If the IP is blocked by our anti abuse dept"""  
    dns_ptr: list[PutServersID200ApplicationJSONServerPublicNetIpv6DNSPtr] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('dns_ptr') }})
    r"""Reverse DNS PTR entries for the IPv6 addresses of this Server, `null` by default"""  
    ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ip') }})
    r"""IP address (v6) of this Server"""  
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id'), 'exclude': lambda f: f is None }})
    r"""ID of the Resource"""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PutServersID200ApplicationJSONServerPublicNet:
    r"""Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`"""
    
    floating_ips: list[int] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('floating_ips') }})
    r"""IDs of Floating IPs assigned to this Server"""  
    ipv4: PutServersID200ApplicationJSONServerPublicNetIpv4 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ipv4') }})
    r"""IP address (v4) and its reverse DNS entry of this Server"""  
    ipv6: PutServersID200ApplicationJSONServerPublicNetIpv6 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ipv6') }})
    r"""IPv6 network assigned to this Server and its reverse DNS entry"""  
    firewalls: Optional[list[PutServersID200ApplicationJSONServerPublicNetServerPublicNetFirewall]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('firewalls'), 'exclude': lambda f: f is None }})
    r"""Firewalls applied to the public network interface of this Server"""  
    
class PutServersID200ApplicationJSONServerServerTypeCPUTypeEnum(str, Enum):
    r"""Type of cpu"""
    SHARED = 'shared'
    DEDICATED = 'dedicated'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PutServersID200ApplicationJSONServerServerTypePricesPriceHourly:
    r"""Hourly costs for a Server type in this Location"""
    
    gross: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('gross') }})
    r"""Price with VAT added"""  
    net: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('net') }})
    r"""Price without VAT"""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PutServersID200ApplicationJSONServerServerTypePricesPriceMonthly:
    r"""Monthly costs for a Server type in this Location"""
    
    gross: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('gross') }})
    r"""Price with VAT added"""  
    net: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('net') }})
    r"""Price without VAT"""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PutServersID200ApplicationJSONServerServerTypePrices:
    
    location: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('location') }})
    r"""Name of the Location the price is for"""  
    price_hourly: PutServersID200ApplicationJSONServerServerTypePricesPriceHourly = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('price_hourly') }})
    r"""Hourly costs for a Server type in this Location"""  
    price_monthly: PutServersID200ApplicationJSONServerServerTypePricesPriceMonthly = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('price_monthly') }})
    r"""Monthly costs for a Server type in this Location"""  
    
class PutServersID200ApplicationJSONServerServerTypeStorageTypeEnum(str, Enum):
    r"""Type of Server boot drive. Local has higher speed. Network has better availability."""
    LOCAL = 'local'
    NETWORK = 'network'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PutServersID200ApplicationJSONServerServerType:
    r"""Type of Server - determines how much ram, disk and cpu a Server has"""
    
    cores: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('cores') }})
    r"""Number of cpu cores a Server of this type will have"""  
    cpu_type: PutServersID200ApplicationJSONServerServerTypeCPUTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('cpu_type') }})
    r"""Type of cpu"""  
    deprecated: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('deprecated') }})
    r"""True if Server type is deprecated"""  
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('description') }})
    r"""Description of the Server type"""  
    disk: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('disk') }})
    r"""Disk size a Server of this type will have in GB"""  
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id') }})
    r"""ID of the Server type"""  
    memory: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('memory') }})
    r"""Memory a Server of this type will have in GB"""  
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name') }})
    r"""Unique identifier of the Server type"""  
    prices: list[PutServersID200ApplicationJSONServerServerTypePrices] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('prices') }})
    r"""Prices in different Locations"""  
    storage_type: PutServersID200ApplicationJSONServerServerTypeStorageTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('storage_type') }})
    r"""Type of Server boot drive. Local has higher speed. Network has better availability."""  
    
class PutServersID200ApplicationJSONServerStatusEnum(str, Enum):
    r"""Status of the Server"""
    RUNNING = 'running'
    INITIALIZING = 'initializing'
    STARTING = 'starting'
    STOPPING = 'stopping'
    OFF = 'off'
    DELETING = 'deleting'
    MIGRATING = 'migrating'
    REBUILDING = 'rebuilding'
    UNKNOWN = 'unknown'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PutServersID200ApplicationJSONServer:
    
    backup_window: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('backup_window') }})
    r"""Time window (UTC) in which the backup will run, or null if the backups are not enabled"""  
    created: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('created') }})
    r"""Point in time when the Resource was created (in ISO-8601 format)"""  
    datacenter: PutServersID200ApplicationJSONServerDatacenter = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('datacenter') }})
    r"""Datacenter this Resource is located at"""  
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id') }})
    r"""ID of the Resource"""  
    image: PutServersID200ApplicationJSONServerImage = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('image') }})  
    included_traffic: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('included_traffic') }})
    r"""Free Traffic for the current billing period in bytes"""  
    ingoing_traffic: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ingoing_traffic') }})
    r"""Inbound Traffic for the current billing period in bytes"""  
    iso: PutServersID200ApplicationJSONServerIso = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('iso') }})
    r"""ISO Image that is attached to this Server. Null if no ISO is attached."""  
    labels: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('labels') }})
    r"""User-defined labels (key-value pairs)"""  
    locked: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('locked') }})
    r"""True if Server has been locked and is not available to user"""  
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name') }})
    r"""Name of the Server (must be unique per Project and a valid hostname as per RFC 1123)"""  
    outgoing_traffic: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('outgoing_traffic') }})
    r"""Outbound Traffic for the current billing period in bytes"""  
    primary_disk_size: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('primary_disk_size') }})
    r"""Size of the primary Disk"""  
    private_net: list[PutServersID200ApplicationJSONServerPrivateNet] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('private_net') }})
    r"""Private networks information"""  
    protection: PutServersID200ApplicationJSONServerProtection = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('protection') }})
    r"""Protection configuration for the Server"""  
    public_net: PutServersID200ApplicationJSONServerPublicNet = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('public_net') }})
    r"""Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`"""  
    rescue_enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('rescue_enabled') }})
    r"""True if rescue mode is enabled. Server will then boot into rescue system on next reboot"""  
    server_type: PutServersID200ApplicationJSONServerServerType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('server_type') }})
    r"""Type of Server - determines how much ram, disk and cpu a Server has"""  
    status: PutServersID200ApplicationJSONServerStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('status') }})
    r"""Status of the Server"""  
    load_balancers: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('load_balancers'), 'exclude': lambda f: f is None }})  
    placement_group: Optional[PutServersID200ApplicationJSONServerPlacementGroupNullable] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('placement_group'), 'exclude': lambda f: f is None }})  
    volumes: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('volumes'), 'exclude': lambda f: f is None }})
    r"""IDs of Volumes assigned to this Server"""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PutServersID200ApplicationJSON:
    r"""The `server` key in the reply contains the updated Server"""
    
    server: Optional[PutServersID200ApplicationJSONServer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('server'), 'exclude': lambda f: f is None }})  
    

@dataclasses.dataclass
class PutServersIDResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    put_servers_id_200_application_json_object: Optional[PutServersID200ApplicationJSON] = dataclasses.field(default=None)
    r"""The `server` key in the reply contains the updated Server"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    