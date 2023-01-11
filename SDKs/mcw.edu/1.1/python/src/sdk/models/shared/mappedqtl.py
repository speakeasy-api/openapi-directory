import dataclasses
from typing import Optional
from ..shared import qtl as shared_qtl


@dataclasses.dataclass
class MappedQtl:
    chromosome: Optional[str] = dataclasses.field(default=None)
    map_key: Optional[int] = dataclasses.field(default=None)
    qtl: Optional[shared_qtl.Qtl] = dataclasses.field(default=None)
    start: Optional[int] = dataclasses.field(default=None)
    stop: Optional[int] = dataclasses.field(default=None)
    strand: Optional[str] = dataclasses.field(default=None)
    
