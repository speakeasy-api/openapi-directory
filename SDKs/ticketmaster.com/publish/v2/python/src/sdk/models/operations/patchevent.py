import dataclasses
from typing import Optional
from ..shared import augmentationdata as shared_augmentationdata


@dataclasses.dataclass
class PatchEventPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchEventHeaders:
    tmps_correlation_id: str = dataclasses.field(metadata={'header': { 'field_name': 'TMPS-Correlation-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchEventRequest:
    headers: PatchEventHeaders = dataclasses.field()
    path_params: PatchEventPathParams = dataclasses.field()
    request: shared_augmentationdata.AugmentationData = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchEventResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
