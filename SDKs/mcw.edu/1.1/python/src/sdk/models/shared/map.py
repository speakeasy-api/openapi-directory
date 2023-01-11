import dataclasses
from typing import Optional


@dataclasses.dataclass
class Map:
    dbsnp_version: Optional[str] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    key: Optional[int] = dataclasses.field(default=None)
    method_key: Optional[int] = dataclasses.field(default=None)
    name: Optional[str] = dataclasses.field(default=None)
    notes: Optional[str] = dataclasses.field(default=None)
    primary_ref_assembly: Optional[bool] = dataclasses.field(default=None)
    rank: Optional[int] = dataclasses.field(default=None)
    ref_seq_assembly_acc: Optional[str] = dataclasses.field(default=None)
    ref_seq_assembly_name: Optional[str] = dataclasses.field(default=None)
    rgd_id: Optional[int] = dataclasses.field(default=None)
    source: Optional[str] = dataclasses.field(default=None)
    species_type_key: Optional[int] = dataclasses.field(default=None)
    ucsc_assembly_id: Optional[str] = dataclasses.field(default=None)
    unit: Optional[str] = dataclasses.field(default=None)
    version: Optional[str] = dataclasses.field(default=None)
    
