import dataclasses
from typing import Optional
from enum import Enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import identitytoolkitrelyingpartyverifycustomtokenrequest as shared_identitytoolkitrelyingpartyverifycustomtokenrequest
from ..shared import verifycustomtokenresponse as shared_verifycustomtokenresponse


@dataclasses.dataclass
class IdentitytoolkitRelyingpartyVerifyCustomTokenQueryParams:
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class IdentitytoolkitRelyingpartyVerifyCustomTokenSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class IdentitytoolkitRelyingpartyVerifyCustomTokenRequest:
    query_params: IdentitytoolkitRelyingpartyVerifyCustomTokenQueryParams = dataclasses.field()
    security: IdentitytoolkitRelyingpartyVerifyCustomTokenSecurity = dataclasses.field()
    request: Optional[shared_identitytoolkitrelyingpartyverifycustomtokenrequest.IdentitytoolkitRelyingpartyVerifyCustomTokenRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class IdentitytoolkitRelyingpartyVerifyCustomTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    verify_custom_token_response: Optional[shared_verifycustomtokenresponse.VerifyCustomTokenResponse] = dataclasses.field(default=None)
    
