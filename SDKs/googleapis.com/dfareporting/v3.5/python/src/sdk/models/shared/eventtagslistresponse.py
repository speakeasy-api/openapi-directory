import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventtag as shared_eventtag


@dataclass_json
@dataclasses.dataclass
class EventTagsListResponse:
    r"""EventTagsListResponse
    Event Tag List Response
    """
    
    event_tags: Optional[list[shared_eventtag.EventTag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTags') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
