import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import googlefirebaseappcheckv1exchangerecaptchaenterprisetokenrequest as shared_googlefirebaseappcheckv1exchangerecaptchaenterprisetokenrequest
from ..shared import googlefirebaseappcheckv1appchecktoken as shared_googlefirebaseappcheckv1appchecktoken


@dataclasses.dataclass
class FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenPathParams:
    app: str = dataclasses.field(metadata={'path_param': { 'field_name': 'app', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenQueryParams:
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
class FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurity:
    option1: Optional[FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenRequest:
    path_params: FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenPathParams = dataclasses.field()
    query_params: FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenQueryParams = dataclasses.field()
    security: FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurity = dataclasses.field()
    request: Optional[shared_googlefirebaseappcheckv1exchangerecaptchaenterprisetokenrequest.GoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    google_firebase_appcheck_v1_app_check_token: Optional[shared_googlefirebaseappcheckv1appchecktoken.GoogleFirebaseAppcheckV1AppCheckToken] = dataclasses.field(default=None)
    
