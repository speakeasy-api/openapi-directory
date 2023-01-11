import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import amount as shared_amount
from ..shared import balancetype_enum as shared_balancetype_enum


@dataclass_json
@dataclasses.dataclass
class Balance:
    r"""Balance
    A single balance element.
    
    """
    
    balance_amount: shared_amount.Amount = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('balanceAmount') }})
    balance_type: shared_balancetype_enum.BalanceTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('balanceType') }})
    credit_limit_included: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditLimitIncluded') }})
    last_change_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastChangeDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_committed_transaction: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastCommittedTransaction') }})
    reference_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referenceDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
