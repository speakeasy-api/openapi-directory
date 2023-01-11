import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import book as shared_book


@dataclass_json
@dataclasses.dataclass
class Sentence:
    book: Optional[shared_book.Book] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('book') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    sentence: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentence') }})
    
