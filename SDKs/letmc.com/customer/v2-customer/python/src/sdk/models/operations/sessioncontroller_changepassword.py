import dataclasses



@dataclasses.dataclass
class SessionControllerChangePasswordPathParams:
    short_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SessionControllerChangePasswordQueryParams:
    new_password: str = dataclasses.field(metadata={'query_param': { 'field_name': 'newPassword', 'style': 'form', 'explode': True }})
    old_password: str = dataclasses.field(metadata={'query_param': { 'field_name': 'oldPassword', 'style': 'form', 'explode': True }})
    token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SessionControllerChangePasswordRequest:
    path_params: SessionControllerChangePasswordPathParams = dataclasses.field()
    query_params: SessionControllerChangePasswordQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SessionControllerChangePasswordResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
