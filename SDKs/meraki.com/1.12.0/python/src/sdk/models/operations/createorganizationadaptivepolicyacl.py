import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateOrganizationAdaptivePolicyACLPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
class CreateOrganizationAdaptivePolicyACLRequestBodyIPVersionEnum(str, Enum):
    ANY = "any"
    IPV4 = "ipv4"
    IPV6 = "ipv6"

class CreateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnum(str, Enum):
    ALLOW = "allow"
    DENY = "deny"

class CreateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP = "icmp"
    ANY = "any"


@dataclass_json
@dataclasses.dataclass
class CreateOrganizationAdaptivePolicyACLRequestBodyRules:
    policy: CreateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    protocol: CreateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    dst_port: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dstPort') }})
    src_port: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('srcPort') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateOrganizationAdaptivePolicyACLRequestBody:
    ip_version: CreateOrganizationAdaptivePolicyACLRequestBodyIPVersionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipVersion') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rules: list[CreateOrganizationAdaptivePolicyACLRequestBodyRules] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    

@dataclasses.dataclass
class CreateOrganizationAdaptivePolicyACLRequest:
    path_params: CreateOrganizationAdaptivePolicyACLPathParams = dataclasses.field()
    request: CreateOrganizationAdaptivePolicyACLRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateOrganizationAdaptivePolicyACLResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_organization_adaptive_policy_acl_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
