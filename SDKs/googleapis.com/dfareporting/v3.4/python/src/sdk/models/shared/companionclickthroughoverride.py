import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clickthroughurl as shared_clickthroughurl


@dataclass_json
@dataclasses.dataclass
class CompanionClickThroughOverride:
    r"""CompanionClickThroughOverride
    Companion Click-through override.
    """
    
    click_through_url: Optional[shared_clickthroughurl.ClickThroughURL] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickThroughUrl') }})
    creative_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeId') }})
    
