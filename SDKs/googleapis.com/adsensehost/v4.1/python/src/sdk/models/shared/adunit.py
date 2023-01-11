import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import adstyle as shared_adstyle


@dataclass_json
@dataclasses.dataclass
class AdUnitContentAdsSettingsBackupOption:
    r"""AdUnitContentAdsSettingsBackupOption
    The backup option to be used in instances where no ad is available.
    """
    
    color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class AdUnitContentAdsSettings:
    r"""AdUnitContentAdsSettings
    Settings specific to content ads (AFC) and highend mobile content ads (AFMC - deprecated).
    """
    
    backup_option: Optional[AdUnitContentAdsSettingsBackupOption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backupOption') }})
    size: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AdUnitMobileContentAdsSettings:
    r"""AdUnitMobileContentAdsSettings
    Settings specific to WAP mobile content ads (AFMC - deprecated).
    """
    
    markup_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('markupLanguage') }})
    scripting_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scriptingLanguage') }})
    size: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AdUnit:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    content_ads_settings: Optional[AdUnitContentAdsSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentAdsSettings') }})
    custom_style: Optional[shared_adstyle.AdStyle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customStyle') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    mobile_content_ads_settings: Optional[AdUnitMobileContentAdsSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileContentAdsSettings') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
