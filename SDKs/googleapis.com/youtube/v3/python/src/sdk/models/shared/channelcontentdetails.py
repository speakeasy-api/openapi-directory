import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ChannelContentDetailsRelatedPlaylists:
    favorites: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('favorites') }})
    likes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('likes') }})
    uploads: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uploads') }})
    watch_history: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchHistory') }})
    watch_later: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchLater') }})
    

@dataclass_json
@dataclasses.dataclass
class ChannelContentDetails:
    r"""ChannelContentDetails
    Details about the content of a channel.
    """
    
    related_playlists: Optional[ChannelContentDetailsRelatedPlaylists] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedPlaylists') }})
    
