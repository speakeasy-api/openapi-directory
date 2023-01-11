import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import orderdocument as shared_orderdocument


@dataclass_json
@dataclasses.dataclass
class OrderDocumentsListResponse:
    r"""OrderDocumentsListResponse
    Order document List Response
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    order_documents: Optional[list[shared_orderdocument.OrderDocument]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderDocuments') }})
    
