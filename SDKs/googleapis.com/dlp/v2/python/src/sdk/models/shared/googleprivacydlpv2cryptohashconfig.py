import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2cryptokey as shared_googleprivacydlpv2cryptokey


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2CryptoHashConfig:
    r"""GooglePrivacyDlpV2CryptoHashConfig
    Pseudonymization method that generates surrogates via cryptographic hashing. Uses SHA-256. The key size must be either 32 or 64 bytes. Outputs a base64 encoded representation of the hashed output (for example, L7k0BHmF1ha5U3NfGykjro4xWi1MPVQPjhMAZbSV9mM=). Currently, only string and integer values can be hashed. See https://cloud.google.com/dlp/docs/pseudonymization to learn more.
    """
    
    crypto_key: Optional[shared_googleprivacydlpv2cryptokey.GooglePrivacyDlpV2CryptoKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cryptoKey') }})
    
