import dataclasses



@dataclasses.dataclass
class CollectionsLinkedNodesListPathParams:
    collection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CollectionsLinkedNodesListRequest:
    path_params: CollectionsLinkedNodesListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CollectionsLinkedNodesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
