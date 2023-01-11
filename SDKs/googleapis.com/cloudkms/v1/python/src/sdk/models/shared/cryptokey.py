import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cryptokeyversion as shared_cryptokeyversion
from ..shared import cryptokeyversiontemplate as shared_cryptokeyversiontemplate
from ..shared import cryptokeyversion as shared_cryptokeyversion

class CryptoKeyPurposeEnum(str, Enum):
    CRYPTO_KEY_PURPOSE_UNSPECIFIED = "CRYPTO_KEY_PURPOSE_UNSPECIFIED"
    ENCRYPT_DECRYPT = "ENCRYPT_DECRYPT"
    ASYMMETRIC_SIGN = "ASYMMETRIC_SIGN"
    ASYMMETRIC_DECRYPT = "ASYMMETRIC_DECRYPT"
    MAC = "MAC"


@dataclass_json
@dataclasses.dataclass
class CryptoKey:
    r"""CryptoKey
    A CryptoKey represents a logical key that can be used for cryptographic operations. A CryptoKey is made up of zero or more versions, which represent the actual key material used in cryptographic operations.
    """
    
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    crypto_key_backend: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cryptoKeyBackend') }})
    destroy_scheduled_duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destroyScheduledDuration') }})
    import_only: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importOnly') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    next_rotation_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextRotationTime') }})
    primary: Optional[shared_cryptokeyversion.CryptoKeyVersion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    purpose: Optional[CryptoKeyPurposeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purpose') }})
    rotation_period: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rotationPeriod') }})
    version_template: Optional[shared_cryptokeyversiontemplate.CryptoKeyVersionTemplate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionTemplate') }})
    

@dataclass_json
@dataclasses.dataclass
class CryptoKeyInput:
    r"""CryptoKeyInput
    A CryptoKey represents a logical key that can be used for cryptographic operations. A CryptoKey is made up of zero or more versions, which represent the actual key material used in cryptographic operations.
    """
    
    crypto_key_backend: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cryptoKeyBackend') }})
    destroy_scheduled_duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destroyScheduledDuration') }})
    import_only: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importOnly') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    next_rotation_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextRotationTime') }})
    primary: Optional[shared_cryptokeyversion.CryptoKeyVersionInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    purpose: Optional[CryptoKeyPurposeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purpose') }})
    rotation_period: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rotationPeriod') }})
    version_template: Optional[shared_cryptokeyversiontemplate.CryptoKeyVersionTemplate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionTemplate') }})
    
