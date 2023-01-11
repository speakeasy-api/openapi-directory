import dataclasses
from typing import Optional


@dataclasses.dataclass
class Image:
    id: Optional[str] = dataclasses.field(default=None)
    sha1: Optional[str] = dataclasses.field(default=None)
    sha256: Optional[str] = dataclasses.field(default=None)
    url: Optional[str] = dataclasses.field(default=None)
    
