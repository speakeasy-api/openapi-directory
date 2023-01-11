import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import leveldetails as shared_leveldetails


@dataclass_json
@dataclasses.dataclass
class MembershipsLevelSnippet:
    creator_channel_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creatorChannelId') }})
    level_details: Optional[shared_leveldetails.LevelDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('levelDetails') }})
    
