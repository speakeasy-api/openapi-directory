import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class Filters:
    filter: Optional[str] = dataclasses.field(default=None)
    filter_type: Optional[str] = dataclasses.field(default=None)
    included_fields: Optional[list[Any]] = dataclasses.field(default=None)
    
