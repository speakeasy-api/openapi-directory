import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datedvalue as shared_datedvalue


@dataclass_json
@dataclasses.dataclass
class TimeSeries:
    r"""TimeSeries
    Represents a timeseries.
    """
    
    dated_values: Optional[list[shared_datedvalue.DatedValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datedValues') }})
    
