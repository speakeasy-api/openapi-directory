import dataclasses



@dataclasses.dataclass
class DeleteSSHKeysIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSSHKeysIDRequest:
    path_params: DeleteSSHKeysIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteSSHKeysIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
