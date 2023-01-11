import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import transactionresource as shared_transactionresource


@dataclass_json
@dataclasses.dataclass
class ListTransactionsResponseLinks:
    next: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    prev: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev') }})
    

@dataclass_json
@dataclasses.dataclass
class ListTransactionsResponse:
    r"""ListTransactionsResponse
    Successful response to get all transactions. This returns a paginated
    list of transactions, which can be scrolled by following the `prev` and
    `next` links if present.
    
    """
    
    data: list[shared_transactionresource.TransactionResource] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: ListTransactionsResponseLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    
