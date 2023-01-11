import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import keyring as shared_keyring


@dataclass_json
@dataclasses.dataclass
class ListKeyRingsResponse:
    r"""ListKeyRingsResponse
    Response message for KeyManagementService.ListKeyRings.
    """
    
    key_rings: Optional[list[shared_keyring.KeyRing]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyRings') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    total_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    
