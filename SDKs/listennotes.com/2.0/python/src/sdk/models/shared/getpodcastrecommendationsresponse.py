import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import podcastsimple as shared_podcastsimple


@dataclass_json
@dataclasses.dataclass
class GetPodcastRecommendationsResponse:
    recommendations: list[shared_podcastsimple.PodcastSimple] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendations') }})
    
