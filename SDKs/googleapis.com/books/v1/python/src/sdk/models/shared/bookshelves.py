import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bookshelf as shared_bookshelf


@dataclass_json
@dataclasses.dataclass
class Bookshelves:
    items: Optional[list[shared_bookshelf.Bookshelf]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
