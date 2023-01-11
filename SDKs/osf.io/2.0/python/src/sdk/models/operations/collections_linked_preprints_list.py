import dataclasses



@dataclasses.dataclass
class CollectionsLinkedPreprintsListPathParams:
    collection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CollectionsLinkedPreprintsListRequest:
    path_params: CollectionsLinkedPreprintsListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CollectionsLinkedPreprintsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
