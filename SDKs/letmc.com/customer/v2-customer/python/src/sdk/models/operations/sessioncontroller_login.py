import dataclasses
from typing import Optional


@dataclasses.dataclass
class SessionControllerLoginPathParams:
    short_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SessionControllerLoginQueryParams:
    password: str = dataclasses.field(metadata={'query_param': { 'field_name': 'password', 'style': 'form', 'explode': True }})
    username: str = dataclasses.field(metadata={'query_param': { 'field_name': 'username', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SessionControllerLoginRequest:
    path_params: SessionControllerLoginPathParams = dataclasses.field()
    query_params: SessionControllerLoginQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SessionControllerLoginResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    session_controller_login_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    session_controller_login_200_application_xml_string: Optional[str] = dataclasses.field(default=None)
    session_controller_login_200_text_json_string: Optional[str] = dataclasses.field(default=None)
    session_controller_login_200_text_xml_string: Optional[str] = dataclasses.field(default=None)
    
