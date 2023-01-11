import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import availability as shared_availability


@dataclass_json
@dataclasses.dataclass
class UpdateAvailabilityResponse:
    r"""UpdateAvailabilityResponse
    The response to a update availability request.
    """
    
    availabilities: Optional[list[shared_availability.Availability]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availabilities') }})
    
