import dataclasses



@dataclasses.dataclass
class SessionControllerLogoutPathParams:
    short_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SessionControllerLogoutQueryParams:
    token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SessionControllerLogoutRequest:
    path_params: SessionControllerLogoutPathParams = dataclasses.field()
    query_params: SessionControllerLogoutQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SessionControllerLogoutResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
