import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writableaggregate as shared_writableaggregate
from ..shared import aggregate as shared_aggregate


@dataclasses.dataclass
class IpamAggregatesPartialUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IpamAggregatesPartialUpdateRequest:
    path_params: IpamAggregatesPartialUpdatePathParams = dataclasses.field()
    request: shared_writableaggregate.WritableAggregateInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class IpamAggregatesPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    aggregate: Optional[shared_aggregate.Aggregate] = dataclasses.field(default=None)
    
