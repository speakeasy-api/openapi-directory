import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDiscoveryengineV1alphaCompletionInfo:
    r"""GoogleCloudDiscoveryengineV1alphaCompletionInfo
    Detailed completion information including completion attribution token and clicked completion info.
    """
    
    selected_position: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectedPosition') }})
    selected_suggestion: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectedSuggestion') }})
    
