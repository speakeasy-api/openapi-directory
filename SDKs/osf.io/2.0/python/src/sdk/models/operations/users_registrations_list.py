import dataclasses



@dataclasses.dataclass
class UsersRegistrationsListPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UsersRegistrationsListRequest:
    path_params: UsersRegistrationsListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class UsersRegistrationsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
