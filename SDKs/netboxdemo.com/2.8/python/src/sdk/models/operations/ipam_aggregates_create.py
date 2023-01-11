import dataclasses
from typing import Optional
from ..shared import writableaggregate as shared_writableaggregate
from ..shared import aggregate as shared_aggregate


@dataclasses.dataclass
class IpamAggregatesCreateRequest:
    request: shared_writableaggregate.WritableAggregateInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class IpamAggregatesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    aggregate: Optional[shared_aggregate.Aggregate] = dataclasses.field(default=None)
    
