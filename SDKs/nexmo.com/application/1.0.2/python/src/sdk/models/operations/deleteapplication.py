import dataclasses



@dataclasses.dataclass
class DeleteApplicationPathParams:
    app_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteApplicationRequest:
    path_params: DeleteApplicationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteApplicationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
