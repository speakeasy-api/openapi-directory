import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventperiodrange as shared_eventperiodrange
from ..shared import eventupdaterequest as shared_eventupdaterequest


@dataclass_json
@dataclasses.dataclass
class EventPeriodUpdate:
    r"""EventPeriodUpdate
    An event period update resource.
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    time_period: Optional[shared_eventperiodrange.EventPeriodRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timePeriod') }})
    updates: Optional[list[shared_eventupdaterequest.EventUpdateRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updates') }})
    
