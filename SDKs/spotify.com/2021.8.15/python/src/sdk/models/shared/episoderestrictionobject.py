import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class EpisodeRestrictionObject:
    r"""EpisodeRestrictionObject

    https://developer.spotify.com/documentation/web-api/reference/#object-episoderestrictionobject - Find more info on the official Spotify Web API Reference
    """
    
    reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    
