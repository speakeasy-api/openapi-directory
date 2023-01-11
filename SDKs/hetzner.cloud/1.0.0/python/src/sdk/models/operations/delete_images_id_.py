import dataclasses



@dataclasses.dataclass
class DeleteImagesIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteImagesIDRequest:
    path_params: DeleteImagesIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteImagesIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
