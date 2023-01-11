import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlelongrunning_operation as shared_googlelongrunning_operation


@dataclass_json
@dataclasses.dataclass
class GoogleLongrunningListOperationsResponse:
    r"""GoogleLongrunningListOperationsResponse
    The response message for Operations.ListOperations.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    operations: Optional[list[shared_googlelongrunning_operation.GoogleLongrunningOperation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operations') }})
    
