import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bandedrange as shared_bandedrange


@dataclass_json
@dataclasses.dataclass
class UpdateBandingRequest:
    r"""UpdateBandingRequest
    Updates properties of the supplied banded range.
    """
    
    banded_range: Optional[shared_bandedrange.BandedRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandedRange') }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    
