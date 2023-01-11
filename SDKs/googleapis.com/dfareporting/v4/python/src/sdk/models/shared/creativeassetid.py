import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CreativeAssetIDTypeEnum(str, Enum):
    IMAGE = "IMAGE"
    FLASH = "FLASH"
    VIDEO = "VIDEO"
    HTML = "HTML"
    HTML_IMAGE = "HTML_IMAGE"
    AUDIO = "AUDIO"


@dataclass_json
@dataclasses.dataclass
class CreativeAssetID:
    r"""CreativeAssetID
    Creative Asset ID.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[CreativeAssetIDTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
