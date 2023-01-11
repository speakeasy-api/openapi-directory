import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clickthroughurl as shared_clickthroughurl


@dataclass_json
@dataclasses.dataclass
class RichMediaExitOverride:
    r"""RichMediaExitOverride
    Rich Media Exit Override.
    """
    
    click_through_url: Optional[shared_clickthroughurl.ClickThroughURL] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickThroughUrl') }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    exit_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exitId') }})
    
