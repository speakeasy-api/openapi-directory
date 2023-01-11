import dataclasses
from typing import Optional
from ..shared import aggregate as shared_aggregate


@dataclasses.dataclass
class IpamAggregatesReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IpamAggregatesReadRequest:
    path_params: IpamAggregatesReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class IpamAggregatesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    aggregate: Optional[shared_aggregate.Aggregate] = dataclasses.field(default=None)
    
