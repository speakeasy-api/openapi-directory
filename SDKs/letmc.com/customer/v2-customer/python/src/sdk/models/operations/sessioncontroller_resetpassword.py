import dataclasses



@dataclasses.dataclass
class SessionControllerResetPasswordPathParams:
    short_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SessionControllerResetPasswordQueryParams:
    email: str = dataclasses.field(metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SessionControllerResetPasswordRequest:
    path_params: SessionControllerResetPasswordPathParams = dataclasses.field()
    query_params: SessionControllerResetPasswordQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SessionControllerResetPasswordResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
