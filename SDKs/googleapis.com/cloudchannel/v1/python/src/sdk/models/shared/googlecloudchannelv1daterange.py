import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googletypedate as shared_googletypedate
from ..shared import googletypedatetime as shared_googletypedatetime


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1DateRange:
    r"""GoogleCloudChannelV1DateRange
    A representation of usage or invoice date ranges.
    """
    
    invoice_end_date: Optional[shared_googletypedate.GoogleTypeDate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceEndDate') }})
    invoice_start_date: Optional[shared_googletypedate.GoogleTypeDate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceStartDate') }})
    usage_end_date_time: Optional[shared_googletypedatetime.GoogleTypeDateTime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageEndDateTime') }})
    usage_start_date_time: Optional[shared_googletypedatetime.GoogleTypeDateTime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageStartDateTime') }})
    
