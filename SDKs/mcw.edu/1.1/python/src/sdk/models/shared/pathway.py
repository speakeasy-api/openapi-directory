import dataclasses
from typing import Optional
from ..shared import pathwayobject as shared_pathwayobject
from ..shared import reference as shared_reference


@dataclasses.dataclass
class Pathway:
    description: Optional[str] = dataclasses.field(default=None)
    has_altered_path: Optional[str] = dataclasses.field(default=None)
    id: Optional[str] = dataclasses.field(default=None)
    name: Optional[str] = dataclasses.field(default=None)
    object_list: Optional[list[shared_pathwayobject.PathwayObject]] = dataclasses.field(default=None)
    pathway_categories: Optional[list[str]] = dataclasses.field(default=None)
    reference_list: Optional[list[shared_reference.Reference]] = dataclasses.field(default=None)
    
