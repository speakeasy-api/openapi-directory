import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import event as shared_event


@dataclass_json
@dataclasses.dataclass
class Activity:
    r"""Activity
    An Activity resource is a combined view of multiple events. An activity has a list of individual events and a combined view of the common fields among all events.
    """
    
    combined_event: Optional[shared_event.Event] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('combinedEvent') }})
    single_events: Optional[list[shared_event.Event]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('singleEvents') }})
    
