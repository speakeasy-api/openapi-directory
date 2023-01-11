import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import googlefirebaseappcheckv1batchgetdevicecheckconfigsresponse as shared_googlefirebaseappcheckv1batchgetdevicecheckconfigsresponse


@dataclasses.dataclass
class FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetPathParams:
    parent: str = dataclasses.field(metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    names: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'names', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurity:
    option1: Optional[FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetRequest:
    path_params: FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetPathParams = dataclasses.field()
    query_params: FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetQueryParams = dataclasses.field()
    security: FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    google_firebase_appcheck_v1_batch_get_device_check_configs_response: Optional[shared_googlefirebaseappcheckv1batchgetdevicecheckconfigsresponse.GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse] = dataclasses.field(default=None)
    
