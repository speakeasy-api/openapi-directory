import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import activeviewvideoviewabilitymetricconfig as shared_activeviewvideoviewabilitymetricconfig
from ..shared import lookbackwindow as shared_lookbackwindow

class FloodlightGroupWebTagTypeEnum(str, Enum):
    WEB_TAG_TYPE_UNSPECIFIED = "WEB_TAG_TYPE_UNSPECIFIED"
    WEB_TAG_TYPE_NONE = "WEB_TAG_TYPE_NONE"
    WEB_TAG_TYPE_IMAGE = "WEB_TAG_TYPE_IMAGE"
    WEB_TAG_TYPE_DYNAMIC = "WEB_TAG_TYPE_DYNAMIC"


@dataclass_json
@dataclasses.dataclass
class FloodlightGroup:
    r"""FloodlightGroup
    A single Floodlight group.
    """
    
    active_view_config: Optional[shared_activeviewvideoviewabilitymetricconfig.ActiveViewVideoViewabilityMetricConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeViewConfig') }})
    custom_variables: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customVariables') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    floodlight_group_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floodlightGroupId') }})
    lookback_window: Optional[shared_lookbackwindow.LookbackWindow] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lookbackWindow') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    web_tag_type: Optional[FloodlightGroupWebTagTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webTagType') }})
    
