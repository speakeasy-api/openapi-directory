import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ContentStreamTypeAssignedTargetingOptionDetailsContentStreamTypeEnum(str, Enum):
    CONTENT_STREAM_TYPE_UNSPECIFIED = "CONTENT_STREAM_TYPE_UNSPECIFIED"
    CONTENT_LIVE_STREAM = "CONTENT_LIVE_STREAM"
    CONTENT_ON_DEMAND = "CONTENT_ON_DEMAND"


@dataclass_json
@dataclasses.dataclass
class ContentStreamTypeAssignedTargetingOptionDetails:
    r"""ContentStreamTypeAssignedTargetingOptionDetails
    Details for content stream type assigned targeting option. This will be populated in the content_stream_type_details field when targeting_type is `TARGETING_TYPE_CONTENT_STREAM_TYPE`. Explicitly targeting all options is not supported. Remove all content stream type targeting options to achieve this effect.
    """
    
    content_stream_type: Optional[ContentStreamTypeAssignedTargetingOptionDetailsContentStreamTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentStreamType') }})
    targeting_option_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingOptionId') }})
    

@dataclass_json
@dataclasses.dataclass
class ContentStreamTypeAssignedTargetingOptionDetailsInput:
    r"""ContentStreamTypeAssignedTargetingOptionDetailsInput
    Details for content stream type assigned targeting option. This will be populated in the content_stream_type_details field when targeting_type is `TARGETING_TYPE_CONTENT_STREAM_TYPE`. Explicitly targeting all options is not supported. Remove all content stream type targeting options to achieve this effect.
    """
    
    targeting_option_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingOptionId') }})
    
