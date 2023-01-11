import dataclasses



@dataclasses.dataclass
class UsersCheckFollowingForUserPathParams:
    target_user: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_user', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UsersCheckFollowingForUserRequest:
    path_params: UsersCheckFollowingForUserPathParams = dataclasses.field()
    

@dataclasses.dataclass
class UsersCheckFollowingForUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
