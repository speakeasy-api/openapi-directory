import dataclasses
from typing import Any


@dataclasses.dataclass
class CollectionsLinkedNodesRelationshipsPathParams:
    collection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CollectionsLinkedNodesRelationshipsRequest:
    path_params: CollectionsLinkedNodesRelationshipsPathParams = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CollectionsLinkedNodesRelationshipsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
