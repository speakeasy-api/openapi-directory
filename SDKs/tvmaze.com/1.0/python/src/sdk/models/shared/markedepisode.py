import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class MarkedEpisodeEmbedded:
    episode: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('episode') }})
    

@dataclass_json
@dataclasses.dataclass
class MarkedEpisodeInput:
    embedded: Optional[MarkedEpisodeEmbedded] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_embedded') }})
    marked_at: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marked_at') }})
    type: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class MarkedEpisode:
    embedded: Optional[MarkedEpisodeEmbedded] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_embedded') }})
    episode_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('episode_id') }})
    marked_at: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marked_at') }})
    type: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
