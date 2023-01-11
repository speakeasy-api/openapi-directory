import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CreateUpdatePlaylistRequestPlaylistSharingEnum(str, Enum):
    PUBLIC = "public"
    PRIVATE = "private"


@dataclass_json
@dataclasses.dataclass
class CreateUpdatePlaylistRequestPlaylistTracks:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateUpdatePlaylistRequestPlaylist:
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    sharing: Optional[CreateUpdatePlaylistRequestPlaylistSharingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharing') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    tracks: Optional[list[CreateUpdatePlaylistRequestPlaylistTracks]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracks') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateUpdatePlaylistRequest:
    playlist: Optional[CreateUpdatePlaylistRequestPlaylist] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playlist') }})
    
