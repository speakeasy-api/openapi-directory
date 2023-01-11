import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import effectivetag as shared_effectivetag


@dataclass_json
@dataclasses.dataclass
class ListEffectiveTagsResponse:
    r"""ListEffectiveTagsResponse
    The response of ListEffectiveTags.
    """
    
    effective_tags: Optional[list[shared_effectivetag.EffectiveTag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveTags') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
