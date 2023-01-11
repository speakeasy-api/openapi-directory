import dataclasses



@dataclasses.dataclass
class DcimInventoryItemsDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimInventoryItemsDeleteRequest:
    path_params: DcimInventoryItemsDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimInventoryItemsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
