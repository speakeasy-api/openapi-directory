import dataclasses



@dataclasses.dataclass
class CollectionsMetadataSubjectsRelationshipsPathParams:
    cgm_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'cgm_id', 'style': 'simple', 'explode': False }})
    collection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CollectionsMetadataSubjectsRelationshipsRequest:
    path_params: CollectionsMetadataSubjectsRelationshipsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CollectionsMetadataSubjectsRelationshipsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
