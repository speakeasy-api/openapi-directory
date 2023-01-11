import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import disallowsobject as shared_disallowsobject
from ..shared import contextobject as shared_contextobject
from ..shared import deviceobject as shared_deviceobject
from ..shared import trackobject as shared_trackobject
from ..shared import episodeobject as shared_episodeobject


@dataclass_json
@dataclasses.dataclass
class CurrentlyPlayingContextObject:
    r"""CurrentlyPlayingContextObject

    https://developer.spotify.com/documentation/web-api/reference/#object-currentlyplayingcontextobject - Find more info on the official Spotify Web API Reference
    """
    
    actions: Optional[shared_disallowsobject.DisallowsObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    context: Optional[shared_contextobject.ContextObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    currently_playing_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currently_playing_type') }})
    device: Optional[shared_deviceobject.DeviceObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    is_playing: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_playing') }})
    item: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item') }})
    progress_ms: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress_ms') }})
    repeat_state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repeat_state') }})
    shuffle_state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shuffle_state') }})
    timestamp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    
