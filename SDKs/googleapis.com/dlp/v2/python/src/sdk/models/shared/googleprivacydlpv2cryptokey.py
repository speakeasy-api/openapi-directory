import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2kmswrappedcryptokey as shared_googleprivacydlpv2kmswrappedcryptokey
from ..shared import googleprivacydlpv2transientcryptokey as shared_googleprivacydlpv2transientcryptokey
from ..shared import googleprivacydlpv2unwrappedcryptokey as shared_googleprivacydlpv2unwrappedcryptokey


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2CryptoKey:
    r"""GooglePrivacyDlpV2CryptoKey
    This is a data encryption key (DEK) (as opposed to a key encryption key (KEK) stored by Cloud Key Management Service (Cloud KMS). When using Cloud KMS to wrap or unwrap a DEK, be sure to set an appropriate IAM policy on the KEK to ensure an attacker cannot unwrap the DEK.
    """
    
    kms_wrapped: Optional[shared_googleprivacydlpv2kmswrappedcryptokey.GooglePrivacyDlpV2KmsWrappedCryptoKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsWrapped') }})
    transient: Optional[shared_googleprivacydlpv2transientcryptokey.GooglePrivacyDlpV2TransientCryptoKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transient') }})
    unwrapped: Optional[shared_googleprivacydlpv2unwrappedcryptokey.GooglePrivacyDlpV2UnwrappedCryptoKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unwrapped') }})
    
