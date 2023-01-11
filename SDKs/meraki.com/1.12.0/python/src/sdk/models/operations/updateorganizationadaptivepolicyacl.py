import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateOrganizationAdaptivePolicyACLPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
class UpdateOrganizationAdaptivePolicyACLRequestBodyIPVersionEnum(str, Enum):
    ANY = "any"
    IPV4 = "ipv4"
    IPV6 = "ipv6"

class UpdateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnum(str, Enum):
    ALLOW = "allow"
    DENY = "deny"

class UpdateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP = "icmp"
    ANY = "any"


@dataclass_json
@dataclasses.dataclass
class UpdateOrganizationAdaptivePolicyACLRequestBodyRules:
    policy: UpdateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    protocol: UpdateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    dst_port: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dstPort') }})
    src_port: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('srcPort') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateOrganizationAdaptivePolicyACLRequestBody:
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    ip_version: Optional[UpdateOrganizationAdaptivePolicyACLRequestBodyIPVersionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipVersion') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rules: Optional[list[UpdateOrganizationAdaptivePolicyACLRequestBodyRules]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    

@dataclasses.dataclass
class UpdateOrganizationAdaptivePolicyACLRequest:
    path_params: UpdateOrganizationAdaptivePolicyACLPathParams = dataclasses.field()
    request: Optional[UpdateOrganizationAdaptivePolicyACLRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateOrganizationAdaptivePolicyACLResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_organization_adaptive_policy_acl_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
