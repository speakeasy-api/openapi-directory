import dataclasses
from typing import Optional
from ..shared import sslp as shared_sslp


@dataclasses.dataclass
class MappedSslp:
    chromosome: Optional[str] = dataclasses.field(default=None)
    map_key: Optional[int] = dataclasses.field(default=None)
    sslp: Optional[shared_sslp.Sslp] = dataclasses.field(default=None)
    start: Optional[int] = dataclasses.field(default=None)
    stop: Optional[int] = dataclasses.field(default=None)
    strand: Optional[str] = dataclasses.field(default=None)
    
