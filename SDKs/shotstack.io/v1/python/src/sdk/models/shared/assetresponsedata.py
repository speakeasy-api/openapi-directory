import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assetresponseattributes as shared_assetresponseattributes


@dataclass_json
@dataclasses.dataclass
class AssetResponseData:
    r"""AssetResponseData
    The type of resource (an asset) and attributes of the asset.
    """
    
    attributes: Optional[shared_assetresponseattributes.AssetResponseAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
