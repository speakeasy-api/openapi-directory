import dataclasses



@dataclasses.dataclass
class DeleteUsersUserIDPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteUsersUserIDRequest:
    path_params: DeleteUsersUserIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteUsersUserIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
