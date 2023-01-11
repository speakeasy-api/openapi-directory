import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DeletePodcastResponseStatusEnum(str, Enum):
    DELETED = "deleted"
    IN_REVIEW = "in review"


@dataclass_json
@dataclasses.dataclass
class DeletePodcastResponse:
    status: DeletePodcastResponseStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
