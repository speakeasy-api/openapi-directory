import dataclasses
from typing import Optional
from ..shared import application_grant as shared_application_grant
from ..shared import basic_error as shared_basic_error


@dataclasses.dataclass
class OauthAuthorizationsGetGrantPathParams:
    grant_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'grant_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OauthAuthorizationsGetGrantRequest:
    path_params: OauthAuthorizationsGetGrantPathParams = dataclasses.field()
    

@dataclasses.dataclass
class OauthAuthorizationsGetGrantResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    application_grant: Optional[shared_application_grant.ApplicationGrant] = dataclasses.field(default=None)
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    
