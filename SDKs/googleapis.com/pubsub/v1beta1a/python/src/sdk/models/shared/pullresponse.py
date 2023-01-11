import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pubsubevent as shared_pubsubevent


@dataclass_json
@dataclasses.dataclass
class PullResponse:
    r"""PullResponse
    Either a PubsubMessage or a truncation event. One of these two must be populated.
    """
    
    ack_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ackId') }})
    pubsub_event: Optional[shared_pubsubevent.PubsubEvent] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubsubEvent') }})
    
