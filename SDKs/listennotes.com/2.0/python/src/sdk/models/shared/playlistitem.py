import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PlaylistItemTypeEnum(str, Enum):
    EPISODE = "episode"
    CUSTOM_AUDIO = "custom_audio"
    PODCAST = "podcast"


@dataclass_json
@dataclasses.dataclass
class PlaylistItem:
    r"""PlaylistItem
    An item in a playlist
    """
    
    added_at_ms: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_at_ms') }})
    data: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    type: Optional[PlaylistItemTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
