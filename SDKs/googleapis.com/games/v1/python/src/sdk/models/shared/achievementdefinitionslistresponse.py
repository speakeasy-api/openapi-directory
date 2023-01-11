import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import achievementdefinition as shared_achievementdefinition


@dataclass_json
@dataclasses.dataclass
class AchievementDefinitionsListResponse:
    r"""AchievementDefinitionsListResponse
    A list of achievement definition objects.
    """
    
    items: Optional[list[shared_achievementdefinition.AchievementDefinition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
