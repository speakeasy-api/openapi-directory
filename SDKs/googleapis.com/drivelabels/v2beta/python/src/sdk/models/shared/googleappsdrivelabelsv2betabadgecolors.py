import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googletypecolor as shared_googletypecolor


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2betaBadgeColors:
    r"""GoogleAppsDriveLabelsV2betaBadgeColors
    The color derived from BadgeConfig and changed to the closest recommended supported color.
    """
    
    background_color: Optional[shared_googletypecolor.GoogleTypeColor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundColor') }})
    foreground_color: Optional[shared_googletypecolor.GoogleTypeColor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('foregroundColor') }})
    solo_color: Optional[shared_googletypecolor.GoogleTypeColor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('soloColor') }})
    
