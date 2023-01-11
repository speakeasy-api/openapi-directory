import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import googlefirebaseappcheckv1betaexchangerecaptchatokenrequest as shared_googlefirebaseappcheckv1betaexchangerecaptchatokenrequest
from ..shared import googlefirebaseappcheckv1betaappchecktoken as shared_googlefirebaseappcheckv1betaappchecktoken


@dataclasses.dataclass
class FirebaseappcheckProjectsAppsExchangeRecaptchaTokenPathParams:
    app: str = dataclasses.field(metadata={'path_param': { 'field_name': 'app', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FirebaseappcheckProjectsAppsExchangeRecaptchaTokenQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurity:
    option1: Optional[FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class FirebaseappcheckProjectsAppsExchangeRecaptchaTokenRequest:
    path_params: FirebaseappcheckProjectsAppsExchangeRecaptchaTokenPathParams = dataclasses.field()
    query_params: FirebaseappcheckProjectsAppsExchangeRecaptchaTokenQueryParams = dataclasses.field()
    security: FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurity = dataclasses.field()
    request: Optional[shared_googlefirebaseappcheckv1betaexchangerecaptchatokenrequest.GoogleFirebaseAppcheckV1betaExchangeRecaptchaTokenRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class FirebaseappcheckProjectsAppsExchangeRecaptchaTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    google_firebase_appcheck_v1beta_app_check_token: Optional[shared_googlefirebaseappcheckv1betaappchecktoken.GoogleFirebaseAppcheckV1betaAppCheckToken] = dataclasses.field(default=None)
    
