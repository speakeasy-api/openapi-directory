import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrecaptchaenterprisev1androidkeysettings as shared_googlecloudrecaptchaenterprisev1androidkeysettings
from ..shared import googlecloudrecaptchaenterprisev1ioskeysettings as shared_googlecloudrecaptchaenterprisev1ioskeysettings
from ..shared import googlecloudrecaptchaenterprisev1testingoptions as shared_googlecloudrecaptchaenterprisev1testingoptions
from ..shared import googlecloudrecaptchaenterprisev1wafsettings as shared_googlecloudrecaptchaenterprisev1wafsettings
from ..shared import googlecloudrecaptchaenterprisev1webkeysettings as shared_googlecloudrecaptchaenterprisev1webkeysettings


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecaptchaenterpriseV1Key:
    r"""GoogleCloudRecaptchaenterpriseV1Key
    A key used to identify and configure applications (web and/or mobile) that use reCAPTCHA Enterprise.
    """
    
    android_settings: Optional[shared_googlecloudrecaptchaenterprisev1androidkeysettings.GoogleCloudRecaptchaenterpriseV1AndroidKeySettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidSettings') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    ios_settings: Optional[shared_googlecloudrecaptchaenterprisev1ioskeysettings.GoogleCloudRecaptchaenterpriseV1IosKeySettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosSettings') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    testing_options: Optional[shared_googlecloudrecaptchaenterprisev1testingoptions.GoogleCloudRecaptchaenterpriseV1TestingOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testingOptions') }})
    waf_settings: Optional[shared_googlecloudrecaptchaenterprisev1wafsettings.GoogleCloudRecaptchaenterpriseV1WafSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wafSettings') }})
    web_settings: Optional[shared_googlecloudrecaptchaenterprisev1webkeysettings.GoogleCloudRecaptchaenterpriseV1WebKeySettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webSettings') }})
    
