import dataclasses



@dataclasses.dataclass
class DeleteVolumesIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteVolumesIDRequest:
    path_params: DeleteVolumesIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteVolumesIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
