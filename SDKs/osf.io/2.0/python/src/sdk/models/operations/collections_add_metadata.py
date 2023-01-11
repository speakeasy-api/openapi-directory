import dataclasses
from typing import Any


@dataclasses.dataclass
class CollectionsAddMetadataPathParams:
    collection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CollectionsAddMetadataRequest:
    path_params: CollectionsAddMetadataPathParams = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CollectionsAddMetadataResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
