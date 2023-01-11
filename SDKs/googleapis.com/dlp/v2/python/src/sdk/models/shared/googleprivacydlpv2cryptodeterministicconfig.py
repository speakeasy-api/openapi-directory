import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2fieldid as shared_googleprivacydlpv2fieldid
from ..shared import googleprivacydlpv2cryptokey as shared_googleprivacydlpv2cryptokey
from ..shared import googleprivacydlpv2infotype as shared_googleprivacydlpv2infotype


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2CryptoDeterministicConfig:
    r"""GooglePrivacyDlpV2CryptoDeterministicConfig
    Pseudonymization method that generates deterministic encryption for the given input. Outputs a base64 encoded representation of the encrypted output. Uses AES-SIV based on the RFC https://tools.ietf.org/html/rfc5297.
    """
    
    context: Optional[shared_googleprivacydlpv2fieldid.GooglePrivacyDlpV2FieldID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    crypto_key: Optional[shared_googleprivacydlpv2cryptokey.GooglePrivacyDlpV2CryptoKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cryptoKey') }})
    surrogate_info_type: Optional[shared_googleprivacydlpv2infotype.GooglePrivacyDlpV2InfoType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('surrogateInfoType') }})
    
