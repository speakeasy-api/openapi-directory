import dataclasses



@dataclasses.dataclass
class DeleteAttributesComputedIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAttributesComputedIDRequest:
    path_params: DeleteAttributesComputedIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAttributesComputedIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
