import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkSwitchAccessControlListsPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkSwitchAccessControlListsRequestBodyRulesIPVersionEnum(str, Enum):
    ANY = "any"
    IPV4 = "ipv4"
    IPV6 = "ipv6"

class UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum(str, Enum):
    ALLOW = "allow"
    DENY = "deny"

class UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ANY = "any"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSwitchAccessControlListsRequestBodyRules:
    dst_cidr: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dstCidr') }})
    policy: UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    protocol: UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    src_cidr: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('srcCidr') }})
    comment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    dst_port: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dstPort') }})
    ip_version: Optional[UpdateNetworkSwitchAccessControlListsRequestBodyRulesIPVersionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipVersion') }})
    src_port: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('srcPort') }})
    vlan: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlan') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSwitchAccessControlListsRequestBody:
    rules: list[UpdateNetworkSwitchAccessControlListsRequestBodyRules] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    

@dataclasses.dataclass
class UpdateNetworkSwitchAccessControlListsRequest:
    path_params: UpdateNetworkSwitchAccessControlListsPathParams = dataclasses.field()
    request: UpdateNetworkSwitchAccessControlListsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkSwitchAccessControlListsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_switch_access_control_lists_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
