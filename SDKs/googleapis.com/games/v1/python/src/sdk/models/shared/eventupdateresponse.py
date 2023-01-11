import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventbatchrecordfailure as shared_eventbatchrecordfailure
from ..shared import eventrecordfailure as shared_eventrecordfailure
from ..shared import playerevent as shared_playerevent


@dataclass_json
@dataclasses.dataclass
class EventUpdateResponse:
    r"""EventUpdateResponse
    An event period update resource.
    """
    
    batch_failures: Optional[list[shared_eventbatchrecordfailure.EventBatchRecordFailure]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchFailures') }})
    event_failures: Optional[list[shared_eventrecordfailure.EventRecordFailure]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventFailures') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    player_events: Optional[list[shared_playerevent.PlayerEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playerEvents') }})
    
