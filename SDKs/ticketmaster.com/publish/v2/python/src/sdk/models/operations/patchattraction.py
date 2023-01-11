import dataclasses
from typing import Optional
from ..shared import augmentationdata as shared_augmentationdata


@dataclasses.dataclass
class PatchAttractionPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchAttractionHeaders:
    tmps_correlation_id: str = dataclasses.field(metadata={'header': { 'field_name': 'TMPS-Correlation-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchAttractionRequest:
    headers: PatchAttractionHeaders = dataclasses.field()
    path_params: PatchAttractionPathParams = dataclasses.field()
    request: shared_augmentationdata.AugmentationData = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchAttractionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
