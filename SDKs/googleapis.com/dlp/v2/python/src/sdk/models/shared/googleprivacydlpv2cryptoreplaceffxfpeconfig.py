import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2fieldid as shared_googleprivacydlpv2fieldid
from ..shared import googleprivacydlpv2cryptokey as shared_googleprivacydlpv2cryptokey
from ..shared import googleprivacydlpv2infotype as shared_googleprivacydlpv2infotype

class GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnum(str, Enum):
    FFX_COMMON_NATIVE_ALPHABET_UNSPECIFIED = "FFX_COMMON_NATIVE_ALPHABET_UNSPECIFIED"
    NUMERIC = "NUMERIC"
    HEXADECIMAL = "HEXADECIMAL"
    UPPER_CASE_ALPHA_NUMERIC = "UPPER_CASE_ALPHA_NUMERIC"
    ALPHA_NUMERIC = "ALPHA_NUMERIC"


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig:
    r"""GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig
    Replaces an identifier with a surrogate using Format Preserving Encryption (FPE) with the FFX mode of operation; however when used in the `ReidentifyContent` API method, it serves the opposite function by reversing the surrogate back into the original identifier. The identifier must be encoded as ASCII. For a given crypto key and context, the same identifier will be replaced with the same surrogate. Identifiers must be at least two characters long. In the case that the identifier is the empty string, it will be skipped. See https://cloud.google.com/dlp/docs/pseudonymization to learn more. Note: We recommend using CryptoDeterministicConfig for all use cases which do not require preserving the input alphabet space and size, plus warrant referential integrity.
    """
    
    common_alphabet: Optional[GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commonAlphabet') }})
    context: Optional[shared_googleprivacydlpv2fieldid.GooglePrivacyDlpV2FieldID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    crypto_key: Optional[shared_googleprivacydlpv2cryptokey.GooglePrivacyDlpV2CryptoKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cryptoKey') }})
    custom_alphabet: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customAlphabet') }})
    radix: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radix') }})
    surrogate_info_type: Optional[shared_googleprivacydlpv2infotype.GooglePrivacyDlpV2InfoType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('surrogateInfoType') }})
    
