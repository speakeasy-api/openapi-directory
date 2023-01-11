import dataclasses
from typing import Optional
from ..shared import entitlement as shared_entitlement


@dataclasses.dataclass
class PublishEntitlementsHeaders:
    tmps_correlation_id: str = dataclasses.field(metadata={'header': { 'field_name': 'TMPS-Correlation-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PublishEntitlementsRequest:
    headers: PublishEntitlementsHeaders = dataclasses.field()
    request: shared_entitlement.Entitlement = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PublishEntitlementsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
