import dataclasses
from typing import Optional
from enum import Enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import identitytoolkitrelyingpartyuploadaccountrequest as shared_identitytoolkitrelyingpartyuploadaccountrequest
from ..shared import uploadaccountresponse as shared_uploadaccountresponse


@dataclasses.dataclass
class IdentitytoolkitRelyingpartyUploadAccountQueryParams:
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class IdentitytoolkitRelyingpartyUploadAccountSecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class IdentitytoolkitRelyingpartyUploadAccountSecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class IdentitytoolkitRelyingpartyUploadAccountSecurity:
    option1: Optional[IdentitytoolkitRelyingpartyUploadAccountSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[IdentitytoolkitRelyingpartyUploadAccountSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class IdentitytoolkitRelyingpartyUploadAccountRequest:
    query_params: IdentitytoolkitRelyingpartyUploadAccountQueryParams = dataclasses.field()
    security: IdentitytoolkitRelyingpartyUploadAccountSecurity = dataclasses.field()
    request: Optional[shared_identitytoolkitrelyingpartyuploadaccountrequest.IdentitytoolkitRelyingpartyUploadAccountRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class IdentitytoolkitRelyingpartyUploadAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    upload_account_response: Optional[shared_uploadaccountresponse.UploadAccountResponse] = dataclasses.field(default=None)
    
