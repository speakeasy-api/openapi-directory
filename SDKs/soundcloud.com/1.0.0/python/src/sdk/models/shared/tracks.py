import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import track as shared_track


@dataclass_json
@dataclasses.dataclass
class Tracks:
    collection: Optional[list[shared_track.Track]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collection') }})
    next_href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_href') }})
    
