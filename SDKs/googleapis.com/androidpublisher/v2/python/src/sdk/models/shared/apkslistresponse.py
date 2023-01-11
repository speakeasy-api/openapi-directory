import dataclasses
from typing import Optional
from ..shared import apk as shared_apk


@dataclasses.dataclass
class ApksListResponse:
    apks: Optional[list[shared_apk.Apk]] = dataclasses.field(default=None)
    kind: Optional[str] = dataclasses.field(default=None)
    
