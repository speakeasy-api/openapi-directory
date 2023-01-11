import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googletypecolor as shared_googletypecolor


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2betaBadgeConfig:
    r"""GoogleAppsDriveLabelsV2betaBadgeConfig
    Badge status of the label.
    """
    
    color: Optional[shared_googletypecolor.GoogleTypeColor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    priority_override: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priorityOverride') }})
    
