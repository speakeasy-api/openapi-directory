import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import certificateauthorityconfig as shared_certificateauthorityconfig

class CertificateIssuanceConfigKeyAlgorithmEnum(str, Enum):
    KEY_ALGORITHM_UNSPECIFIED = "KEY_ALGORITHM_UNSPECIFIED"
    RSA_2048 = "RSA_2048"
    ECDSA_P256 = "ECDSA_P256"


@dataclass_json
@dataclasses.dataclass
class CertificateIssuanceConfig:
    r"""CertificateIssuanceConfig
    CertificateIssuanceConfig specifies how to issue and manage a certificate.
    """
    
    certificate_authority_config: Optional[shared_certificateauthorityconfig.CertificateAuthorityConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateAuthorityConfig') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    key_algorithm: Optional[CertificateIssuanceConfigKeyAlgorithmEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyAlgorithm') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    lifetime: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifetime') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rotation_window_percentage: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rotationWindowPercentage') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclasses.dataclass
class CertificateIssuanceConfigInput:
    r"""CertificateIssuanceConfigInput
    CertificateIssuanceConfig specifies how to issue and manage a certificate.
    """
    
    certificate_authority_config: Optional[shared_certificateauthorityconfig.CertificateAuthorityConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateAuthorityConfig') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    key_algorithm: Optional[CertificateIssuanceConfigKeyAlgorithmEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyAlgorithm') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    lifetime: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifetime') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rotation_window_percentage: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rotationWindowPercentage') }})
    
