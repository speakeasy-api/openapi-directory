import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SubscribeToEventBody:
    publication_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicationUrl') }})
    topics: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('topics') }})
    encrypt: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encrypt') }})
    
