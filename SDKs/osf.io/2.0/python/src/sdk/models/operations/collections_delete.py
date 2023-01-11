import dataclasses



@dataclasses.dataclass
class CollectionsDeletePathParams:
    collection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CollectionsDeleteRequest:
    path_params: CollectionsDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class CollectionsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
