import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import date_ as shared_date_


@dataclass_json
@dataclasses.dataclass
class CollectionPeriod:
    r"""CollectionPeriod
    The collection period is a date range which includes the `first` and `last` day.
    """
    
    first_date: Optional[shared_date_.Date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstDate') }})
    last_date: Optional[shared_date_.Date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastDate') }})
    
