import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import episodesimple as shared_episodesimple


@dataclass_json
@dataclasses.dataclass
class GetEpisodeRecommendationsResponse:
    recommendations: list[shared_episodesimple.EpisodeSimple] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendations') }})
    
