import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import transactions as shared_transactions


@dataclass_json
@dataclasses.dataclass
class TransactionDetailsBody:
    r"""TransactionDetailsBody
    Transaction details.
    """
    
    transaction_details: shared_transactions.Transactions = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionDetails') }})
    
