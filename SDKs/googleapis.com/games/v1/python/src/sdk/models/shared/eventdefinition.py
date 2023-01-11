import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventchild as shared_eventchild

class EventDefinitionVisibilityEnum(str, Enum):
    EVENT_VISIBILITY_UNSPECIFIED = "EVENT_VISIBILITY_UNSPECIFIED"
    REVEALED = "REVEALED"
    HIDDEN = "HIDDEN"


@dataclass_json
@dataclasses.dataclass
class EventDefinition:
    r"""EventDefinition
    An event definition resource.
    """
    
    child_events: Optional[list[shared_eventchild.EventChild]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('childEvents') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageUrl') }})
    is_default_image_url: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDefaultImageUrl') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    visibility: Optional[EventDefinitionVisibilityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    
