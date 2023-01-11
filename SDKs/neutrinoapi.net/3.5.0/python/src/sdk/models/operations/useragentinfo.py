import dataclasses
from typing import Optional
from enum import Enum
from ..shared import apierror as shared_apierror
from ..shared import useragentinforesponse as shared_useragentinforesponse

class UserAgentInfoRequestBodyOutputCaseEnum(str, Enum):
    CAMEL = "camel"


@dataclasses.dataclass
class UserAgentInfoRequestBody:
    user_agent: str = dataclasses.field(metadata={'form': { 'field_name': 'user-agent' }})
    output_case: Optional[UserAgentInfoRequestBodyOutputCaseEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'output-case' }})
    

@dataclasses.dataclass
class UserAgentInfoRequest:
    request: Optional[UserAgentInfoRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class UserAgentInfoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    user_agent_info_response: Optional[shared_useragentinforesponse.UserAgentInfoResponse] = dataclasses.field(default=None)
    
