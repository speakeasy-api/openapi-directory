import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import hmackeymetadata as shared_hmackeymetadata


@dataclass_json
@dataclasses.dataclass
class HmacKeysMetadata:
    r"""HmacKeysMetadata
    A list of hmacKeys.
    """
    
    items: Optional[list[shared_hmackeymetadata.HmacKeyMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
