import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class AutoCheckInPathParams:
    ticketnumber: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ticketnumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AutoCheckInQueryParams:
    email_address: str = dataclasses.field(metadata={'query_param': { 'field_name': 'emailAddress', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AutoCheckInHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AutoCheckInSecurity:
    auth: shared_security.SchemeAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AutoCheckInRequest:
    headers: AutoCheckInHeaders = dataclasses.field()
    path_params: AutoCheckInPathParams = dataclasses.field()
    query_params: AutoCheckInQueryParams = dataclasses.field()
    security: AutoCheckInSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AutoCheckInResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    auto_check_in_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
