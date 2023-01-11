import dataclasses
from typing import Optional


@dataclasses.dataclass
class SessionControllerGetSessionInfoPathParams:
    short_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SessionControllerGetSessionInfoQueryParams:
    token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SessionControllerGetSessionInfoRequest:
    path_params: SessionControllerGetSessionInfoPathParams = dataclasses.field()
    query_params: SessionControllerGetSessionInfoQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SessionControllerGetSessionInfoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    session_controller_get_session_info_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    session_controller_get_session_info_200_application_xml_string: Optional[str] = dataclasses.field(default=None)
    session_controller_get_session_info_200_text_json_string: Optional[str] = dataclasses.field(default=None)
    session_controller_get_session_info_200_text_xml_string: Optional[str] = dataclasses.field(default=None)
    
