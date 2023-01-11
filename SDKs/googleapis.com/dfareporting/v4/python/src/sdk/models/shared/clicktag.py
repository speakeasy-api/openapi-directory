import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import creativeclickthroughurl as shared_creativeclickthroughurl


@dataclass_json
@dataclasses.dataclass
class ClickTag:
    r"""ClickTag
    Creative Click Tag.
    """
    
    click_through_url: Optional[shared_creativeclickthroughurl.CreativeClickThroughURL] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickThroughUrl') }})
    event_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventName') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
