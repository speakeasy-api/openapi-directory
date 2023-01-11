import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recommendationseedobject as shared_recommendationseedobject
from ..shared import trackobject as shared_trackobject


@dataclass_json
@dataclasses.dataclass
class RecommendationsObject:
    r"""RecommendationsObject

    https://developer.spotify.com/documentation/web-api/reference/#object-recommendationsobject - Find more info on the official Spotify Web API Reference
    """
    
    seeds: Optional[list[shared_recommendationseedobject.RecommendationSeedObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seeds') }})
    tracks: Optional[list[shared_trackobject.TrackObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracks') }})
    
