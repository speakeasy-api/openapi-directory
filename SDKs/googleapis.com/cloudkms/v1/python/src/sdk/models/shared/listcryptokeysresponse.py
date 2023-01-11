import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cryptokey as shared_cryptokey


@dataclass_json
@dataclasses.dataclass
class ListCryptoKeysResponse:
    r"""ListCryptoKeysResponse
    Response message for KeyManagementService.ListCryptoKeys.
    """
    
    crypto_keys: Optional[list[shared_cryptokey.CryptoKey]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cryptoKeys') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    total_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    
