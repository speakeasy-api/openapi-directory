import dataclasses
from typing import Any


@dataclasses.dataclass
class CollectionsMetadataDetailPathParams:
    cgm_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'cgm_id', 'style': 'simple', 'explode': False }})
    collection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CollectionsMetadataDetailRequest:
    path_params: CollectionsMetadataDetailPathParams = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CollectionsMetadataDetailResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
