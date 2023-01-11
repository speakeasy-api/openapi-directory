import dataclasses
from typing import Any


@dataclasses.dataclass
class CollectionsLinkedNodesRelationshipsDeletePathParams:
    collection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CollectionsLinkedNodesRelationshipsDeleteRequest:
    path_params: CollectionsLinkedNodesRelationshipsDeletePathParams = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CollectionsLinkedNodesRelationshipsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
