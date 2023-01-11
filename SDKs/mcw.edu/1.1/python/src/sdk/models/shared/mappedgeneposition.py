import dataclasses
from typing import Optional


@dataclasses.dataclass
class MappedGenePosition:
    chromosome: Optional[str] = dataclasses.field(default=None)
    map_key: Optional[int] = dataclasses.field(default=None)
    rgd_id: Optional[int] = dataclasses.field(default=None)
    start: Optional[int] = dataclasses.field(default=None)
    stop: Optional[int] = dataclasses.field(default=None)
    strand: Optional[str] = dataclasses.field(default=None)
    symbol: Optional[str] = dataclasses.field(default=None)
    
