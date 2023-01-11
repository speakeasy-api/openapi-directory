import dataclasses
from typing import Optional
from ..shared import externallyhostedapk as shared_externallyhostedapk


@dataclasses.dataclass
class ApksAddExternallyHostedResponse:
    externally_hosted_apk: Optional[shared_externallyhostedapk.ExternallyHostedApk] = dataclasses.field(default=None)
    
