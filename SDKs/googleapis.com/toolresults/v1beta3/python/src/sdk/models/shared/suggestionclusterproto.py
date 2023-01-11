import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import suggestionproto as shared_suggestionproto

class SuggestionClusterProtoCategoryEnum(str, Enum):
    UNKNOWN_CATEGORY = "unknownCategory"
    CONTENT_LABELING = "contentLabeling"
    TOUCH_TARGET_SIZE = "touchTargetSize"
    LOW_CONTRAST = "lowContrast"
    IMPLEMENTATION = "implementation"


@dataclass_json
@dataclasses.dataclass
class SuggestionClusterProto:
    r"""SuggestionClusterProto
    A set of similar suggestions that we suspect are closely related. This proto and most of the nested protos are branched from foxandcrown.prelaunchreport.service.SuggestionClusterProto, replacing PLR's dependencies with FTL's.
    """
    
    category: Optional[SuggestionClusterProtoCategoryEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    suggestions: Optional[list[shared_suggestionproto.SuggestionProto]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestions') }})
    
