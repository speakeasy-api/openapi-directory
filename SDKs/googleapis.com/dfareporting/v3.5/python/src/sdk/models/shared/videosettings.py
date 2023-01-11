import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import companionsetting as shared_companionsetting
from ..shared import obaicon as shared_obaicon
from ..shared import skippablesetting as shared_skippablesetting
from ..shared import transcodesetting as shared_transcodesetting

class VideoSettingsOrientationEnum(str, Enum):
    ANY = "ANY"
    LANDSCAPE = "LANDSCAPE"
    PORTRAIT = "PORTRAIT"


@dataclass_json
@dataclasses.dataclass
class VideoSettings:
    r"""VideoSettings
    Video Settings
    """
    
    companion_settings: Optional[shared_companionsetting.CompanionSetting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companionSettings') }})
    duration_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationSeconds') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    oba_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('obaEnabled') }})
    oba_settings: Optional[shared_obaicon.ObaIcon] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('obaSettings') }})
    orientation: Optional[VideoSettingsOrientationEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orientation') }})
    skippable_settings: Optional[shared_skippablesetting.SkippableSetting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skippableSettings') }})
    transcode_settings: Optional[shared_transcodesetting.TranscodeSetting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transcodeSettings') }})
    
