import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import transactionresource as shared_transactionresource


@dataclass_json
@dataclasses.dataclass
class GetTransactionResponse:
    r"""GetTransactionResponse
    Successful response to get a single transaction.
    
    """
    
    data: shared_transactionresource.TransactionResource = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
