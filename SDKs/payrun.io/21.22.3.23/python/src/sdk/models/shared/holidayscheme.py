import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class HolidaySchemeHolidaySchemeAccrualPayCodes:
    r"""HolidaySchemeHolidaySchemeAccrualPayCodes
    The holiday schemes' accrual pay codes
    """
    
    pay_code: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayCode') }})
    

@dataclass_json
@dataclasses.dataclass
class HolidaySchemeHolidayScheme:
    accrual_pay_codes: Optional[HolidaySchemeHolidaySchemeAccrualPayCodes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccrualPayCodes') }})
    allow_negative_balance: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowNegativeBalance') }})
    annual_entitlement_weeks: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnnualEntitlementWeeks') }})
    bank_holiday_inclusive: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BankHolidayInclusive') }})
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    effective_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EffectiveDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    max_carry_over_days: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxCarryOverDays') }})
    revision: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Revision') }})
    scheme_ceased_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeCeasedDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    scheme_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeKey') }})
    scheme_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    year_start_day: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('YearStartDay') }})
    year_start_month: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('YearStartMonth') }})
    

@dataclass_json
@dataclasses.dataclass
class HolidayScheme:
    holiday_scheme: Optional[HolidaySchemeHolidayScheme] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HolidayScheme') }})
    
