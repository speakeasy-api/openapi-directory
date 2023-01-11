import dataclasses
from typing import Optional


@dataclasses.dataclass
class ApkBinary:
    r"""ApkBinary
    Represents the binary payload of an APK.
    """
    
    sha1: Optional[str] = dataclasses.field(default=None)
    sha256: Optional[str] = dataclasses.field(default=None)
    
