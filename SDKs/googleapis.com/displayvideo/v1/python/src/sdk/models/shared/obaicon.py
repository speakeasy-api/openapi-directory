import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dimensions as shared_dimensions

class ObaIconPositionEnum(str, Enum):
    OBA_ICON_POSITION_UNSPECIFIED = "OBA_ICON_POSITION_UNSPECIFIED"
    OBA_ICON_POSITION_UPPER_RIGHT = "OBA_ICON_POSITION_UPPER_RIGHT"
    OBA_ICON_POSITION_UPPER_LEFT = "OBA_ICON_POSITION_UPPER_LEFT"
    OBA_ICON_POSITION_LOWER_RIGHT = "OBA_ICON_POSITION_LOWER_RIGHT"
    OBA_ICON_POSITION_LOWER_LEFT = "OBA_ICON_POSITION_LOWER_LEFT"


@dataclass_json
@dataclasses.dataclass
class ObaIcon:
    r"""ObaIcon
    OBA Icon for a Creative
    """
    
    click_tracking_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickTrackingUrl') }})
    dimensions: Optional[shared_dimensions.Dimensions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    landing_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('landingPageUrl') }})
    position: Optional[ObaIconPositionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    program: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('program') }})
    resource_mime_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceMimeType') }})
    resource_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceUrl') }})
    view_tracking_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewTrackingUrl') }})
    
