import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import daterange as shared_daterange
from ..shared import localizationsettings as shared_localizationsettings


@dataclass_json
@dataclasses.dataclass
class ReportHeader:
    r"""ReportHeader
    Groups data helps to treat the generated report. Always sent as a first message in the stream response.
    """
    
    date_range: Optional[shared_daterange.DateRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRange') }})
    localization_settings: Optional[shared_localizationsettings.LocalizationSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localizationSettings') }})
    reporting_time_zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportingTimeZone') }})
    
