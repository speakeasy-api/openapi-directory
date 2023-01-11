import dataclasses



@dataclasses.dataclass
class CollectionsMetadataRegistrationsListPathParams:
    collection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CollectionsMetadataRegistrationsListRequest:
    path_params: CollectionsMetadataRegistrationsListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CollectionsMetadataRegistrationsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
