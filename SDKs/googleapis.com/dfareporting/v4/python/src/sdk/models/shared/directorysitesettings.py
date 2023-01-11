import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dfpsettings as shared_dfpsettings


@dataclass_json
@dataclasses.dataclass
class DirectorySiteSettings:
    r"""DirectorySiteSettings
    Directory Site Settings
    """
    
    active_view_opt_out: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeViewOptOut') }})
    dfp_settings: Optional[shared_dfpsettings.DfpSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dfpSettings') }})
    instream_video_placement_accepted: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instreamVideoPlacementAccepted') }})
    interstitial_placement_accepted: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interstitialPlacementAccepted') }})
    
