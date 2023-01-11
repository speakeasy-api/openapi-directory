import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import asset as shared_asset


@dataclass_json
@dataclasses.dataclass
class AssetsWithCheckpoint:
    assets: list[shared_asset.Asset] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    since: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('since') }})
    
