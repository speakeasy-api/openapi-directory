import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import episodesimple as shared_episodesimple
from ..shared import podcastsimple as shared_podcastsimple


@dataclass_json
@dataclasses.dataclass
class GetPodcastsInBatchResponse:
    podcasts: list[shared_podcastsimple.PodcastSimple] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('podcasts') }})
    latest_episodes: Optional[list[shared_episodesimple.EpisodeSimple]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latest_episodes') }})
    
