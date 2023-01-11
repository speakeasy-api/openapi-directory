import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authorizationattemptinfo as shared_authorizationattemptinfo
from ..shared import provisioningissue as shared_provisioningissue

class ManagedCertificateStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PROVISIONING = "PROVISIONING"
    FAILED = "FAILED"
    ACTIVE = "ACTIVE"


@dataclass_json
@dataclasses.dataclass
class ManagedCertificate:
    r"""ManagedCertificate
    Configuration and state of a Managed Certificate. Certificate Manager provisions and renews Managed Certificates automatically, for as long as it's authorized to do so.
    """
    
    authorization_attempt_info: Optional[list[shared_authorizationattemptinfo.AuthorizationAttemptInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizationAttemptInfo') }})
    dns_authorizations: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsAuthorizations') }})
    domains: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domains') }})
    issuance_config: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuanceConfig') }})
    provisioning_issue: Optional[shared_provisioningissue.ProvisioningIssue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provisioningIssue') }})
    state: Optional[ManagedCertificateStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclass_json
@dataclasses.dataclass
class ManagedCertificateInput:
    r"""ManagedCertificateInput
    Configuration and state of a Managed Certificate. Certificate Manager provisions and renews Managed Certificates automatically, for as long as it's authorized to do so.
    """
    
    dns_authorizations: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsAuthorizations') }})
    domains: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domains') }})
    issuance_config: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuanceConfig') }})
    
