import dataclasses
from typing import Optional
from ..shared import apkbinary as shared_apkbinary


@dataclasses.dataclass
class Apk:
    binary: Optional[shared_apkbinary.ApkBinary] = dataclasses.field(default=None)
    version_code: Optional[int] = dataclasses.field(default=None)
    
