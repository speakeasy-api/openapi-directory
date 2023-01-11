import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accessurls as shared_accessurls
from ..shared import certificatedescription as shared_certificatedescription
from ..shared import certificateauthoritypolicy as shared_certificateauthoritypolicy
from ..shared import certificateconfig as shared_certificateconfig
from ..shared import issuingoptions as shared_issuingoptions
from ..shared import keyversionspec as shared_keyversionspec
from ..shared import subordinateconfig as shared_subordinateconfig

class CertificateAuthorityStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"
    PENDING_ACTIVATION = "PENDING_ACTIVATION"
    PENDING_DELETION = "PENDING_DELETION"

class CertificateAuthorityTierEnum(str, Enum):
    TIER_UNSPECIFIED = "TIER_UNSPECIFIED"
    ENTERPRISE = "ENTERPRISE"
    DEVOPS = "DEVOPS"

class CertificateAuthorityTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    SELF_SIGNED = "SELF_SIGNED"
    SUBORDINATE = "SUBORDINATE"


@dataclass_json
@dataclasses.dataclass
class CertificateAuthority:
    r"""CertificateAuthority
    A CertificateAuthority represents an individual Certificate Authority. A CertificateAuthority can be used to create Certificates.
    """
    
    access_urls: Optional[shared_accessurls.AccessUrls] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessUrls') }})
    ca_certificate_descriptions: Optional[list[shared_certificatedescription.CertificateDescription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caCertificateDescriptions') }})
    certificate_policy: Optional[shared_certificateauthoritypolicy.CertificateAuthorityPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificatePolicy') }})
    config: Optional[shared_certificateconfig.CertificateConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    delete_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteTime') }})
    gcs_bucket: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsBucket') }})
    issuing_options: Optional[shared_issuingoptions.IssuingOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuingOptions') }})
    key_spec: Optional[shared_keyversionspec.KeyVersionSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keySpec') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    lifetime: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifetime') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pem_ca_certificates: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pemCaCertificates') }})
    state: Optional[CertificateAuthorityStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    subordinate_config: Optional[shared_subordinateconfig.SubordinateConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subordinateConfig') }})
    tier: Optional[CertificateAuthorityTierEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tier') }})
    type: Optional[CertificateAuthorityTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclasses.dataclass
class CertificateAuthorityInput:
    r"""CertificateAuthorityInput
    A CertificateAuthority represents an individual Certificate Authority. A CertificateAuthority can be used to create Certificates.
    """
    
    access_urls: Optional[shared_accessurls.AccessUrls] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessUrls') }})
    certificate_policy: Optional[shared_certificateauthoritypolicy.CertificateAuthorityPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificatePolicy') }})
    config: Optional[shared_certificateconfig.CertificateConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    gcs_bucket: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsBucket') }})
    issuing_options: Optional[shared_issuingoptions.IssuingOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuingOptions') }})
    key_spec: Optional[shared_keyversionspec.KeyVersionSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keySpec') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    lifetime: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifetime') }})
    subordinate_config: Optional[shared_subordinateconfig.SubordinateConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subordinateConfig') }})
    tier: Optional[CertificateAuthorityTierEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tier') }})
    type: Optional[CertificateAuthorityTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
