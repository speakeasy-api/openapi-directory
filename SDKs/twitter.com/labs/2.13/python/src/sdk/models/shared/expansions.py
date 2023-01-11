import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import photo as shared_photo
from ..shared import video as shared_video
from ..shared import animatedgif as shared_animatedgif
from ..shared import poll as shared_poll


@dataclass_json
@dataclasses.dataclass
class Expansions:
    media: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('media') }})
    places: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('places') }})
    polls: Optional[list[shared_poll.Poll]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('polls') }})
    tweets: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tweets') }})
    users: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    
