import dataclasses
from typing import Optional
from ..shared import analyticscollection as shared_analyticscollection
from ..shared import operationstatus as shared_operationstatus


@dataclasses.dataclass
class CollectAnalyticsPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CollectAnalyticsRequest:
    path_params: CollectAnalyticsPathParams = dataclasses.field()
    request: Optional[shared_analyticscollection.AnalyticsCollection] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CollectAnalyticsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    operation_status: Optional[shared_operationstatus.OperationStatus] = dataclasses.field(default=None)
    
