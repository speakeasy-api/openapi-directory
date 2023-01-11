import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class BadgeExpiryExpiryTypeEnum(str, Enum):
    DATE = "date"
    TIMEFRAME = "timeframe"

class BadgeExpiryTimeframeUnitEnum(str, Enum):
    DAYS = "days"
    MONTHS = "months"
    YEARS = "years"


@dataclass_json
@dataclasses.dataclass
class BadgeExpiry:
    expiration_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expirationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    expires: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires') }})
    expiry_type: Optional[BadgeExpiryExpiryTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiryType') }})
    timeframe_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeframeAmount') }})
    timeframe_unit: Optional[BadgeExpiryTimeframeUnitEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeframeUnit') }})
    
