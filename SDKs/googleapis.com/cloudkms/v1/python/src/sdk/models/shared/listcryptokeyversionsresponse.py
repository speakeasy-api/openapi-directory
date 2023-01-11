import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cryptokeyversion as shared_cryptokeyversion


@dataclass_json
@dataclasses.dataclass
class ListCryptoKeyVersionsResponse:
    r"""ListCryptoKeyVersionsResponse
    Response message for KeyManagementService.ListCryptoKeyVersions.
    """
    
    crypto_key_versions: Optional[list[shared_cryptokeyversion.CryptoKeyVersion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cryptoKeyVersions') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    total_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    
