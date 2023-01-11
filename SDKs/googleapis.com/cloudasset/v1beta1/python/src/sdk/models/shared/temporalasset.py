import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import asset as shared_asset
from ..shared import timewindow as shared_timewindow


@dataclass_json
@dataclasses.dataclass
class TemporalAsset:
    r"""TemporalAsset
    An asset in Google Cloud and its temporal metadata, including the time window when it was observed and its status during that window.
    """
    
    asset: Optional[shared_asset.Asset] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asset') }})
    deleted: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    window: Optional[shared_timewindow.TimeWindow] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('window') }})
    
