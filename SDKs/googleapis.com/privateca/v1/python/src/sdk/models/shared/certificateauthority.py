"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import accessurls as shared_accessurls
from ..shared import certificateconfig as shared_certificateconfig
from ..shared import certificatedescription as shared_certificatedescription
from ..shared import keyversionspec as shared_keyversionspec
from ..shared import subordinateconfig as shared_subordinateconfig
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class CertificateAuthorityStateEnum(str, Enum):
    r"""Output only. The State for this CertificateAuthority."""
    STATE_UNSPECIFIED = 'STATE_UNSPECIFIED'
    ENABLED = 'ENABLED'
    DISABLED = 'DISABLED'
    STAGED = 'STAGED'
    AWAITING_USER_ACTIVATION = 'AWAITING_USER_ACTIVATION'
    DELETED = 'DELETED'

class CertificateAuthorityTierEnum(str, Enum):
    r"""Output only. The CaPool.Tier of the CaPool that includes this CertificateAuthority."""
    TIER_UNSPECIFIED = 'TIER_UNSPECIFIED'
    ENTERPRISE = 'ENTERPRISE'
    DEVOPS = 'DEVOPS'

class CertificateAuthorityTypeEnum(str, Enum):
    r"""Required. Immutable. The Type of this CertificateAuthority."""
    TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED'
    SELF_SIGNED = 'SELF_SIGNED'
    SUBORDINATE = 'SUBORDINATE'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CertificateAuthority:
    r"""A CertificateAuthority represents an individual Certificate Authority. A CertificateAuthority can be used to create Certificates."""
    
    access_urls: Optional[shared_accessurls.AccessUrls] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('accessUrls'), 'exclude': lambda f: f is None }})
    r"""URLs where a CertificateAuthority will publish content."""  
    ca_certificate_descriptions: Optional[list[shared_certificatedescription.CertificateDescription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('caCertificateDescriptions'), 'exclude': lambda f: f is None }})
    r"""Output only. A structured description of this CertificateAuthority's CA certificate and its issuers. Ordered as self-to-root."""  
    config: Optional[shared_certificateconfig.CertificateConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('config'), 'exclude': lambda f: f is None }})
    r"""A CertificateConfig describes an X.509 certificate or CSR that is to be created, as an alternative to using ASN.1."""  
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('createTime'), 'exclude': lambda f: f is None }})
    r"""Output only. The time at which this CertificateAuthority was created."""  
    delete_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('deleteTime'), 'exclude': lambda f: f is None }})
    r"""Output only. The time at which this CertificateAuthority was soft deleted, if it is in the DELETED state."""  
    expire_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('expireTime'), 'exclude': lambda f: f is None }})
    r"""Output only. The time at which this CertificateAuthority will be permanently purged, if it is in the DELETED state."""  
    gcs_bucket: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('gcsBucket'), 'exclude': lambda f: f is None }})
    r"""Immutable. The name of a Cloud Storage bucket where this CertificateAuthority will publish content, such as the CA certificate and CRLs. This must be a bucket name, without any prefixes (such as `gs://`) or suffixes (such as `.googleapis.com`). For example, to use a bucket named `my-bucket`, you would simply specify `my-bucket`. If not specified, a managed bucket will be created."""  
    key_spec: Optional[shared_keyversionspec.KeyVersionSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('keySpec'), 'exclude': lambda f: f is None }})
    r"""A Cloud KMS key configuration that a CertificateAuthority will use."""  
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('labels'), 'exclude': lambda f: f is None }})
    r"""Optional. Labels with user-defined metadata."""  
    lifetime: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('lifetime'), 'exclude': lambda f: f is None }})
    r"""Required. Immutable. The desired lifetime of the CA certificate. Used to create the \\"not_before_time\\" and \\"not_after_time\\" fields inside an X.509 certificate."""  
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name'), 'exclude': lambda f: f is None }})
    r"""Output only. The resource name for this CertificateAuthority in the format `projects/*/locations/*/caPools/*/certificateAuthorities/*`."""  
    pem_ca_certificates: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('pemCaCertificates'), 'exclude': lambda f: f is None }})
    r"""Output only. This CertificateAuthority's certificate chain, including the current CertificateAuthority's certificate. Ordered such that the root issuer is the final element (consistent with RFC 5246). For a self-signed CA, this will only list the current CertificateAuthority's certificate."""  
    state: Optional[CertificateAuthorityStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('state'), 'exclude': lambda f: f is None }})
    r"""Output only. The State for this CertificateAuthority."""  
    subordinate_config: Optional[shared_subordinateconfig.SubordinateConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('subordinateConfig'), 'exclude': lambda f: f is None }})
    r"""Describes a subordinate CA's issuers. This is either a resource name to a known issuing CertificateAuthority, or a PEM issuer certificate chain."""  
    tier: Optional[CertificateAuthorityTierEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('tier'), 'exclude': lambda f: f is None }})
    r"""Output only. The CaPool.Tier of the CaPool that includes this CertificateAuthority."""  
    type: Optional[CertificateAuthorityTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('type'), 'exclude': lambda f: f is None }})
    r"""Required. Immutable. The Type of this CertificateAuthority."""  
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('updateTime'), 'exclude': lambda f: f is None }})
    r"""Output only. The time at which this CertificateAuthority was last updated."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CertificateAuthorityInput:
    r"""A CertificateAuthority represents an individual Certificate Authority. A CertificateAuthority can be used to create Certificates."""
    
    access_urls: Optional[shared_accessurls.AccessUrls] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('accessUrls'), 'exclude': lambda f: f is None }})
    r"""URLs where a CertificateAuthority will publish content."""  
    config: Optional[shared_certificateconfig.CertificateConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('config'), 'exclude': lambda f: f is None }})
    r"""A CertificateConfig describes an X.509 certificate or CSR that is to be created, as an alternative to using ASN.1."""  
    gcs_bucket: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('gcsBucket'), 'exclude': lambda f: f is None }})
    r"""Immutable. The name of a Cloud Storage bucket where this CertificateAuthority will publish content, such as the CA certificate and CRLs. This must be a bucket name, without any prefixes (such as `gs://`) or suffixes (such as `.googleapis.com`). For example, to use a bucket named `my-bucket`, you would simply specify `my-bucket`. If not specified, a managed bucket will be created."""  
    key_spec: Optional[shared_keyversionspec.KeyVersionSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('keySpec'), 'exclude': lambda f: f is None }})
    r"""A Cloud KMS key configuration that a CertificateAuthority will use."""  
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('labels'), 'exclude': lambda f: f is None }})
    r"""Optional. Labels with user-defined metadata."""  
    lifetime: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('lifetime'), 'exclude': lambda f: f is None }})
    r"""Required. Immutable. The desired lifetime of the CA certificate. Used to create the \\"not_before_time\\" and \\"not_after_time\\" fields inside an X.509 certificate."""  
    subordinate_config: Optional[shared_subordinateconfig.SubordinateConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('subordinateConfig'), 'exclude': lambda f: f is None }})
    r"""Describes a subordinate CA's issuers. This is either a resource name to a known issuing CertificateAuthority, or a PEM issuer certificate chain."""  
    type: Optional[CertificateAuthorityTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('type'), 'exclude': lambda f: f is None }})
    r"""Required. Immutable. The Type of this CertificateAuthority."""  
    