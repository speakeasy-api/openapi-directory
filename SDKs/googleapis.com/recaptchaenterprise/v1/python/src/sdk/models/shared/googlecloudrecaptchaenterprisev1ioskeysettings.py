import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecaptchaenterpriseV1IosKeySettings:
    r"""GoogleCloudRecaptchaenterpriseV1IosKeySettings
    Settings specific to keys that can be used by iOS apps.
    """
    
    allow_all_bundle_ids: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowAllBundleIds') }})
    allowed_bundle_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedBundleIds') }})
    
