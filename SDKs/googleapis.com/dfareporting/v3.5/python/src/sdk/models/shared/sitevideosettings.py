import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sitecompanionsetting as shared_sitecompanionsetting
from ..shared import obaicon as shared_obaicon
from ..shared import siteskippablesetting as shared_siteskippablesetting
from ..shared import sitetranscodesetting as shared_sitetranscodesetting

class SiteVideoSettingsOrientationEnum(str, Enum):
    ANY = "ANY"
    LANDSCAPE = "LANDSCAPE"
    PORTRAIT = "PORTRAIT"


@dataclass_json
@dataclasses.dataclass
class SiteVideoSettings:
    r"""SiteVideoSettings
    Video Settings
    """
    
    companion_settings: Optional[shared_sitecompanionsetting.SiteCompanionSetting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companionSettings') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    oba_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('obaEnabled') }})
    oba_settings: Optional[shared_obaicon.ObaIcon] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('obaSettings') }})
    orientation: Optional[SiteVideoSettingsOrientationEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orientation') }})
    skippable_settings: Optional[shared_siteskippablesetting.SiteSkippableSetting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skippableSettings') }})
    transcode_settings: Optional[shared_sitetranscodesetting.SiteTranscodeSetting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transcodeSettings') }})
    
