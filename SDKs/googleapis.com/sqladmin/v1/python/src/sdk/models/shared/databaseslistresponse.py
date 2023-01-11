import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import database as shared_database


@dataclass_json
@dataclasses.dataclass
class DatabasesListResponse:
    r"""DatabasesListResponse
    Database list response.
    """
    
    items: Optional[list[shared_database.Database]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
