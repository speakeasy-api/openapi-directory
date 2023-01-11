import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import missdistance as shared_missdistance
from ..shared import relvelocity as shared_relvelocity


@dataclass_json
@dataclasses.dataclass
class CloseApproachData:
    close_approach_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('close_approach_date') }})
    close_approach_date_full: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('close_approach_date_full') }})
    epoch_date_close_approach: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('epoch_date_close_approach') }})
    miss_distance: Optional[shared_missdistance.MissDistance] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('miss_distance') }})
    orbiting_body: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orbiting_body') }})
    relative_velocity: Optional[shared_relvelocity.RelVelocity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relative_velocity') }})
    
