import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecaptchaenterpriseV1AndroidKeySettings:
    r"""GoogleCloudRecaptchaenterpriseV1AndroidKeySettings
    Settings specific to keys that can be used by Android apps.
    """
    
    allow_all_package_names: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowAllPackageNames') }})
    allowed_package_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedPackageNames') }})
    
