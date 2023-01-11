import dataclasses
from typing import Optional
from ..shared import augmentationdata as shared_augmentationdata


@dataclasses.dataclass
class PatchVenuePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchVenueHeaders:
    tmps_correlation_id: str = dataclasses.field(metadata={'header': { 'field_name': 'TMPS-Correlation-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchVenueRequest:
    headers: PatchVenueHeaders = dataclasses.field()
    path_params: PatchVenuePathParams = dataclasses.field()
    request: shared_augmentationdata.AugmentationData = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchVenueResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
