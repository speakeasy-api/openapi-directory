import dataclasses
from typing import Optional


@dataclasses.dataclass
class CreatedAt:
    from_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'from' }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'to' }})
    
