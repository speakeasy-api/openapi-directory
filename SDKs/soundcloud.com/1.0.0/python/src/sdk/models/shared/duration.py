import dataclasses
from typing import Optional


@dataclasses.dataclass
class Duration:
    from_: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'from' }})
    to: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'to' }})
    
