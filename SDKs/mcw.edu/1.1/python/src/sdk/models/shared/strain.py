import dataclasses
from typing import Optional
from ..shared import status as shared_status


@dataclasses.dataclass
class Strain:
    background_strain_rgd_id: Optional[int] = dataclasses.field(default=None)
    chr_altered: Optional[str] = dataclasses.field(default=None)
    color: Optional[str] = dataclasses.field(default=None)
    genetic_status: Optional[str] = dataclasses.field(default=None)
    genetics: Optional[str] = dataclasses.field(default=None)
    image_url: Optional[str] = dataclasses.field(default=None)
    inbred_gen: Optional[str] = dataclasses.field(default=None)
    key: Optional[int] = dataclasses.field(default=None)
    last_status: Optional[str] = dataclasses.field(default=None)
    last_status_object: Optional[shared_status.Status] = dataclasses.field(default=None)
    modification_method: Optional[str] = dataclasses.field(default=None)
    name: Optional[str] = dataclasses.field(default=None)
    notes: Optional[str] = dataclasses.field(default=None)
    origin: Optional[str] = dataclasses.field(default=None)
    research_use: Optional[str] = dataclasses.field(default=None)
    rgd_id: Optional[int] = dataclasses.field(default=None)
    source: Optional[str] = dataclasses.field(default=None)
    species_type_key: Optional[int] = dataclasses.field(default=None)
    status_log: Optional[list[shared_status.Status]] = dataclasses.field(default=None)
    strain: Optional[str] = dataclasses.field(default=None)
    strain_type_name: Optional[str] = dataclasses.field(default=None)
    substrain: Optional[str] = dataclasses.field(default=None)
    symbol: Optional[str] = dataclasses.field(default=None)
    
