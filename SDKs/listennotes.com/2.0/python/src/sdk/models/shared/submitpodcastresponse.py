import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import podcastminimum as shared_podcastminimum

class SubmitPodcastResponseStatusEnum(str, Enum):
    FOUND = "found"
    IN_REVIEW = "in review"


@dataclass_json
@dataclasses.dataclass
class SubmitPodcastResponse:
    podcast: shared_podcastminimum.PodcastMinimum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('podcast') }})
    status: SubmitPodcastResponseStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
