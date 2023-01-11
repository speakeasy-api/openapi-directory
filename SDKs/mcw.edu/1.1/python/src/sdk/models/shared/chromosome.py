import dataclasses
from typing import Optional


@dataclasses.dataclass
class Chromosome:
    chromosome: Optional[str] = dataclasses.field(default=None)
    contig_count: Optional[int] = dataclasses.field(default=None)
    gap_count: Optional[int] = dataclasses.field(default=None)
    gap_length: Optional[int] = dataclasses.field(default=None)
    genbank_id: Optional[str] = dataclasses.field(default=None)
    map_key: Optional[int] = dataclasses.field(default=None)
    ordinal_number: Optional[int] = dataclasses.field(default=None)
    refseq_id: Optional[str] = dataclasses.field(default=None)
    seq_length: Optional[int] = dataclasses.field(default=None)
    
