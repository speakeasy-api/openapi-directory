import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RemixInfo:
    r"""RemixInfo
    Info about the sources of this asset (i.e. assets that were remixed to create this asset).
    """
    
    source_asset: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceAsset') }})
    
