import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PermissionAccessModeEnum(str, Enum):
    VIEW = "VIEW"
    STORE = "STORE"
    QUERY = "QUERY"
    STREAM = "STREAM"


@dataclass_json
@dataclasses.dataclass
class PermissionDateRange:
    from_: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    to: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
class PermissionFrequencyUnitEnum(str, Enum):
    HOUR = "HOUR"
    WEEK = "WEEK"
    DAY = "DAY"
    MONTH = "MONTH"
    YEAR = "YEAR"


@dataclass_json
@dataclasses.dataclass
class PermissionFrequency:
    repeats: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repeats') }})
    unit: Optional[PermissionFrequencyUnitEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    value: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class Permission:
    access_mode: PermissionAccessModeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessMode') }})
    data_erase_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataEraseAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_range: PermissionDateRange = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRange') }})
    frequency: PermissionFrequency = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    
