import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SkippedDetail:
    r"""SkippedDetail
    Details for an outcome with a SKIPPED outcome summary.
    """
    
    incompatible_app_version: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('incompatibleAppVersion') }})
    incompatible_architecture: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('incompatibleArchitecture') }})
    incompatible_device: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('incompatibleDevice') }})
    
