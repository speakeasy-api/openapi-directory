import dataclasses
from typing import Optional
from ..shared import gene as shared_gene


@dataclasses.dataclass
class MappedGene:
    chromosome: Optional[str] = dataclasses.field(default=None)
    gene: Optional[shared_gene.Gene] = dataclasses.field(default=None)
    map_key: Optional[int] = dataclasses.field(default=None)
    start: Optional[int] = dataclasses.field(default=None)
    stop: Optional[int] = dataclasses.field(default=None)
    strand: Optional[str] = dataclasses.field(default=None)
    
