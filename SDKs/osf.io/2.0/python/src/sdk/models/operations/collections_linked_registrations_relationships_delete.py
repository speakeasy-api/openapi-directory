import dataclasses
from typing import Any


@dataclasses.dataclass
class CollectionsLinkedRegistrationsRelationshipsDeletePathParams:
    collection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CollectionsLinkedRegistrationsRelationshipsDeleteRequest:
    path_params: CollectionsLinkedRegistrationsRelationshipsDeletePathParams = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CollectionsLinkedRegistrationsRelationshipsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
