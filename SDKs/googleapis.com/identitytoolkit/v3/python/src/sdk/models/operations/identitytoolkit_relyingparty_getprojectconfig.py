import dataclasses
from typing import Optional
from enum import Enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import identitytoolkitrelyingpartygetprojectconfigresponse as shared_identitytoolkitrelyingpartygetprojectconfigresponse


@dataclasses.dataclass
class IdentitytoolkitRelyingpartyGetProjectConfigQueryParams:
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    delegated_project_number: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'delegatedProjectNumber', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    project_number: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'projectNumber', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class IdentitytoolkitRelyingpartyGetProjectConfigSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class IdentitytoolkitRelyingpartyGetProjectConfigRequest:
    query_params: IdentitytoolkitRelyingpartyGetProjectConfigQueryParams = dataclasses.field()
    security: IdentitytoolkitRelyingpartyGetProjectConfigSecurity = dataclasses.field()
    

@dataclasses.dataclass
class IdentitytoolkitRelyingpartyGetProjectConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    identitytoolkit_relyingparty_get_project_config_response: Optional[shared_identitytoolkitrelyingpartygetprojectconfigresponse.IdentitytoolkitRelyingpartyGetProjectConfigResponse] = dataclasses.field(default=None)
    
