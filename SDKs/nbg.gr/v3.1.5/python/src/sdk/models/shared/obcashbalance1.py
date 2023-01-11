import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import obactiveorhistoriccurrencyandamount as shared_obactiveorhistoriccurrencyandamount
from ..shared import obcreditdebitcode_enum as shared_obcreditdebitcode_enum
from ..shared import obcreditline1 as shared_obcreditline1
from ..shared import obbalancetype1code_enum as shared_obbalancetype1code_enum


@dataclass_json
@dataclasses.dataclass
class ObCashBalance1:
    r"""ObCashBalance1
    Set of elements used to define the balance details.
    """
    
    account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    amount: shared_obactiveorhistoriccurrencyandamount.ObActiveOrHistoricCurrencyAndAmount = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    credit_debit_indicator: shared_obcreditdebitcode_enum.ObCreditDebitCodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditDebitIndicator') }})
    date_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    type: shared_obbalancetype1code_enum.ObBalanceType1CodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    credit_line: Optional[list[shared_obcreditline1.ObCreditLine1]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditLine') }})
    
