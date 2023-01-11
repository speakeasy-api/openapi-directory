import dataclasses



@dataclasses.dataclass
class CollectionsLinkedRegistrationsRelationshipsCreatePathParams:
    collection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CollectionsLinkedRegistrationsRelationshipsCreateRequest:
    path_params: CollectionsLinkedRegistrationsRelationshipsCreatePathParams = dataclasses.field()
    

@dataclasses.dataclass
class CollectionsLinkedRegistrationsRelationshipsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
