import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tagkey as shared_tagkey


@dataclass_json
@dataclasses.dataclass
class ListTagKeysResponse:
    r"""ListTagKeysResponse
    The ListTagKeys response message.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    tag_keys: Optional[list[shared_tagkey.TagKey]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagKeys') }})
    
