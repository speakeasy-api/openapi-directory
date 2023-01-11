import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googletypedate as shared_googletypedate
from ..shared import googletypetimeofday as shared_googletypetimeofday
from ..shared import googleprivacydlpv2timezone as shared_googleprivacydlpv2timezone

class GooglePrivacyDlpV2DateTimeDayOfWeekEnum(str, Enum):
    DAY_OF_WEEK_UNSPECIFIED = "DAY_OF_WEEK_UNSPECIFIED"
    MONDAY = "MONDAY"
    TUESDAY = "TUESDAY"
    WEDNESDAY = "WEDNESDAY"
    THURSDAY = "THURSDAY"
    FRIDAY = "FRIDAY"
    SATURDAY = "SATURDAY"
    SUNDAY = "SUNDAY"


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2DateTime:
    r"""GooglePrivacyDlpV2DateTime
    Message for a date time object. e.g. 2018-01-01, 5th August.
    """
    
    date_: Optional[shared_googletypedate.GoogleTypeDate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    day_of_week: Optional[GooglePrivacyDlpV2DateTimeDayOfWeekEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayOfWeek') }})
    time: Optional[shared_googletypetimeofday.GoogleTypeTimeOfDay] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    time_zone: Optional[shared_googleprivacydlpv2timezone.GooglePrivacyDlpV2TimeZone] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    
