import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import event as shared_event


@dataclass_json
@dataclasses.dataclass
class ReportRuntimeEventRequest:
    r"""ReportRuntimeEventRequest
    Request for reporting a Managed Notebook Event.
    """
    
    event: Optional[shared_event.Event] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    vm_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmId') }})
    
