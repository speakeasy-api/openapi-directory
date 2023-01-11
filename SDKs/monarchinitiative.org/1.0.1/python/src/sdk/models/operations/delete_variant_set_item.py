import dataclasses



@dataclasses.dataclass
class DeleteVariantSetItemPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteVariantSetItemRequest:
    path_params: DeleteVariantSetItemPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteVariantSetItemResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
