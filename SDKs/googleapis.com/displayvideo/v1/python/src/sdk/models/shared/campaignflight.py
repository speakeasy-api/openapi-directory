import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import daterange as shared_daterange


@dataclass_json
@dataclasses.dataclass
class CampaignFlight:
    r"""CampaignFlight
    Settings that track the planned spend and duration of a campaign.
    """
    
    planned_dates: Optional[shared_daterange.DateRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plannedDates') }})
    planned_spend_amount_micros: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plannedSpendAmountMicros') }})
    
