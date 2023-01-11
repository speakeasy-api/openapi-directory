import dataclasses



@dataclasses.dataclass
class CollectionsLinkedNodesRelationshipsCreatePathParams:
    collection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CollectionsLinkedNodesRelationshipsCreateRequest:
    path_params: CollectionsLinkedNodesRelationshipsCreatePathParams = dataclasses.field()
    

@dataclasses.dataclass
class CollectionsLinkedNodesRelationshipsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
