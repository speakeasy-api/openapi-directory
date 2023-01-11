import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import daterange as shared_daterange

class LineItemFlightFlightDateTypeEnum(str, Enum):
    LINE_ITEM_FLIGHT_DATE_TYPE_UNSPECIFIED = "LINE_ITEM_FLIGHT_DATE_TYPE_UNSPECIFIED"
    LINE_ITEM_FLIGHT_DATE_TYPE_INHERITED = "LINE_ITEM_FLIGHT_DATE_TYPE_INHERITED"
    LINE_ITEM_FLIGHT_DATE_TYPE_CUSTOM = "LINE_ITEM_FLIGHT_DATE_TYPE_CUSTOM"
    LINE_ITEM_FLIGHT_DATE_TYPE_TRIGGER = "LINE_ITEM_FLIGHT_DATE_TYPE_TRIGGER"


@dataclass_json
@dataclasses.dataclass
class LineItemFlight:
    r"""LineItemFlight
    Settings that control the active duration of a line item.
    """
    
    date_range: Optional[shared_daterange.DateRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRange') }})
    flight_date_type: Optional[LineItemFlightFlightDateTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flightDateType') }})
    trigger_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerId') }})
    
