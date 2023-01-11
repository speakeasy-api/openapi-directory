import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import annotation as shared_annotation
from ..shared import messageevent as shared_messageevent


@dataclass_json
@dataclasses.dataclass
class TimeEvent:
    r"""TimeEvent
    A time-stamped annotation or message event in the Span.
    """
    
    annotation: Optional[shared_annotation.Annotation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotation') }})
    message_event: Optional[shared_messageevent.MessageEvent] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageEvent') }})
    time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    
