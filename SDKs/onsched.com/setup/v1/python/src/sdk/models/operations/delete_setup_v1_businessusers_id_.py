import dataclasses



@dataclasses.dataclass
class DeleteSetupV1BusinessusersIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSetupV1BusinessusersIDRequest:
    path_params: DeleteSetupV1BusinessusersIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteSetupV1BusinessusersIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
