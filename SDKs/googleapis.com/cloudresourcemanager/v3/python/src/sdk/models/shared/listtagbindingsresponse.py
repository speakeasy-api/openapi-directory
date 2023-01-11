import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tagbinding as shared_tagbinding


@dataclass_json
@dataclasses.dataclass
class ListTagBindingsResponse:
    r"""ListTagBindingsResponse
    The ListTagBindings response.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    tag_bindings: Optional[list[shared_tagbinding.TagBinding]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagBindings') }})
    
