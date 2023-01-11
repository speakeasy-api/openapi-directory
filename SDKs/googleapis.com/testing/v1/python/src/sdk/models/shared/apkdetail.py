import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apkmanifest as shared_apkmanifest


@dataclass_json
@dataclasses.dataclass
class ApkDetail:
    r"""ApkDetail
    Android application details based on application manifest and apk archive contents.
    """
    
    apk_manifest: Optional[shared_apkmanifest.ApkManifest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apkManifest') }})
    
