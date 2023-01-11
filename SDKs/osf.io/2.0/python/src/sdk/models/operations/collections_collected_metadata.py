import dataclasses



@dataclasses.dataclass
class CollectionsCollectedMetadataPathParams:
    cgm_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'cgm_id', 'style': 'simple', 'explode': False }})
    collection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CollectionsCollectedMetadataRequest:
    path_params: CollectionsCollectedMetadataPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CollectionsCollectedMetadataResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
