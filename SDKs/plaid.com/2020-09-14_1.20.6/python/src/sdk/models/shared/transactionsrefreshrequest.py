import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TransactionsRefreshRequest:
    r"""TransactionsRefreshRequest
    TransactionsRefreshRequest defines the request schema for `/transactions/refresh`
    """
    
    access_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_token') }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
