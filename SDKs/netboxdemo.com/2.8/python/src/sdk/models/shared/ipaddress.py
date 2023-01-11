import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ipaddressinterface as shared_ipaddressinterface
from ..shared import nestedipaddress as shared_nestedipaddress
from ..shared import nestedtenant as shared_nestedtenant
from ..shared import nestedvrf as shared_nestedvrf

class IPAddressFamilyLabelEnum(str, Enum):
    I_PV4 = "IPv4"
    I_PV6 = "IPv6"


@dataclass_json
@dataclasses.dataclass
class IPAddressFamily:
    label: IPAddressFamilyLabelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class IPAddressRoleLabelEnum(str, Enum):
    LOOPBACK = "Loopback"
    SECONDARY = "Secondary"
    ANYCAST = "Anycast"
    VIP = "VIP"
    VRRP = "VRRP"
    HSRP = "HSRP"
    GLBP = "GLBP"
    CARP = "CARP"

class IPAddressRoleValueEnum(str, Enum):
    LOOPBACK = "loopback"
    SECONDARY = "secondary"
    ANYCAST = "anycast"
    VIP = "vip"
    VRRP = "vrrp"
    HSRP = "hsrp"
    GLBP = "glbp"
    CARP = "carp"


@dataclass_json
@dataclasses.dataclass
class IPAddressRole:
    label: IPAddressRoleLabelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: IPAddressRoleValueEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class IPAddressStatusLabelEnum(str, Enum):
    ACTIVE = "Active"
    RESERVED = "Reserved"
    DEPRECATED = "Deprecated"
    DHCP = "DHCP"

class IPAddressStatusValueEnum(str, Enum):
    ACTIVE = "active"
    RESERVED = "reserved"
    DEPRECATED = "deprecated"
    DHCP = "dhcp"


@dataclass_json
@dataclasses.dataclass
class IPAddressStatus:
    label: IPAddressStatusLabelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: IPAddressStatusValueEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class IPAddress:
    address: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    created: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_fields: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    dns_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_name') }})
    family: Optional[IPAddressFamily] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('family') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    interface: Optional[shared_ipaddressinterface.IPAddressInterface] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interface') }})
    last_updated: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    nat_inside: Optional[shared_nestedipaddress.NestedIPAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nat_inside') }})
    nat_outside: Optional[shared_nestedipaddress.NestedIPAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nat_outside') }})
    role: Optional[IPAddressRole] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    status: Optional[IPAddressStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    tenant: Optional[shared_nestedtenant.NestedTenant] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenant') }})
    vrf: Optional[shared_nestedvrf.NestedVrf] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vrf') }})
    
