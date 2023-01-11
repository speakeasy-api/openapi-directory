import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dimensions as shared_dimensions


@dataclass_json
@dataclasses.dataclass
class InventorySourceDisplayCreativeConfig:
    r"""InventorySourceDisplayCreativeConfig
    The configuration for display creatives.
    """
    
    creative_size: Optional[shared_dimensions.Dimensions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeSize') }})
    
