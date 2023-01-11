import dataclasses



@dataclasses.dataclass
class CollectionsLinkedRegistrationsListPathParams:
    collection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CollectionsLinkedRegistrationsListRequest:
    path_params: CollectionsLinkedRegistrationsListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CollectionsLinkedRegistrationsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
