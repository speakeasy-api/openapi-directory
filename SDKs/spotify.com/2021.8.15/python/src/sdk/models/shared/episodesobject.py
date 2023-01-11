import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import episodeobject as shared_episodeobject


@dataclass_json
@dataclasses.dataclass
class EpisodesObject:
    episodes: Optional[list[shared_episodeobject.EpisodeObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('episodes') }})
    
