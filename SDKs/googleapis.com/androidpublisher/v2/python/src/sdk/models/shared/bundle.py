import dataclasses
from typing import Optional


@dataclasses.dataclass
class Bundle:
    sha1: Optional[str] = dataclasses.field(default=None)
    sha256: Optional[str] = dataclasses.field(default=None)
    version_code: Optional[int] = dataclasses.field(default=None)
    
