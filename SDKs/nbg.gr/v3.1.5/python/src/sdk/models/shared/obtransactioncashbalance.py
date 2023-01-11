import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import obactiveorhistoriccurrencyandamount as shared_obactiveorhistoriccurrencyandamount
from ..shared import obcreditdebitcode_enum as shared_obcreditdebitcode_enum
from ..shared import obbalancetype1code_enum as shared_obbalancetype1code_enum


@dataclass_json
@dataclasses.dataclass
class ObTransactionCashBalance:
    r"""ObTransactionCashBalance
    Set of elements used to define the balance as a numerical representation of the net increases and decreases in an account after a transaction entry is applied to the account.
    """
    
    amount: shared_obactiveorhistoriccurrencyandamount.ObActiveOrHistoricCurrencyAndAmount = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    credit_debit_indicator: shared_obcreditdebitcode_enum.ObCreditDebitCodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditDebitIndicator') }})
    type: shared_obbalancetype1code_enum.ObBalanceType1CodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
