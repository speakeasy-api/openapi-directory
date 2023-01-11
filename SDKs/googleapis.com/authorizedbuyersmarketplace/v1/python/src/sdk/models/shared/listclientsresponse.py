import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import client as shared_client


@dataclass_json
@dataclasses.dataclass
class ListClientsResponse:
    r"""ListClientsResponse
    Response message for the list method.
    """
    
    clients: Optional[list[shared_client.Client]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clients') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
