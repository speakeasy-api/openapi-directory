import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import externallyhostedapk as shared_externallyhostedapk


@dataclass_json
@dataclasses.dataclass
class ApksAddExternallyHostedResponse:
    r"""ApksAddExternallyHostedResponse
    Response for creating a new externally hosted APK.
    """
    
    externally_hosted_apk: Optional[shared_externallyhostedapk.ExternallyHostedApk] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externallyHostedApk') }})
    
