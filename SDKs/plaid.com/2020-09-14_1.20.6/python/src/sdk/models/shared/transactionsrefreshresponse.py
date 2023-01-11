import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TransactionsRefreshResponse:
    r"""TransactionsRefreshResponse
    TransactionsRefreshResponse defines the response schema for `/transactions/refresh`
    """
    
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    
