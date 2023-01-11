import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import location as shared_location


@dataclass_json
@dataclasses.dataclass
class GoogleUpdatedLocation:
    r"""GoogleUpdatedLocation
    Represents a location that was modified by Google.
    """
    
    diff_mask: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diffMask') }})
    location: Optional[shared_location.Location] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    
