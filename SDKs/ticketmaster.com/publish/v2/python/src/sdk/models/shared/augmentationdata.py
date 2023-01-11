import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import change as shared_change

class AugmentationDataRelatedEntityTypeEnum(str, Enum):
    EVENT = "event"
    ATTRACTION = "attraction"
    VENUE = "venue"


@dataclass_json
@dataclasses.dataclass
class AugmentationData:
    r"""AugmentationData
    This class defines the Augmentation Data on the Publish API
    """
    
    changes: list[shared_change.Change] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('changes') }})
    related_entity_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedEntityId') }})
    related_entity_type: AugmentationDataRelatedEntityTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedEntityType') }})
    source: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    version_number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionNumber') }})
    score: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    
