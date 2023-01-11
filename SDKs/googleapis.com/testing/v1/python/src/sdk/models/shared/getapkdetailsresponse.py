import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apkdetail as shared_apkdetail


@dataclass_json
@dataclasses.dataclass
class GetApkDetailsResponse:
    r"""GetApkDetailsResponse
    Response containing the details of the specified Android application APK.
    """
    
    apk_detail: Optional[shared_apkdetail.ApkDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apkDetail') }})
    
