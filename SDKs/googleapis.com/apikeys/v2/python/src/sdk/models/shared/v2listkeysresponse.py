import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import v2key as shared_v2key


@dataclass_json
@dataclasses.dataclass
class V2ListKeysResponse:
    r"""V2ListKeysResponse
    Response message for `ListKeys` method.
    """
    
    keys: Optional[list[shared_v2key.V2Key]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keys') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
