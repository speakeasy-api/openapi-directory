import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import getnotificationchannelverificationcoderequest as shared_getnotificationchannelverificationcoderequest
from ..shared import getnotificationchannelverificationcoderesponse as shared_getnotificationchannelverificationcoderesponse


@dataclasses.dataclass
class MonitoringProjectsNotificationChannelsGetVerificationCodePathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MonitoringProjectsNotificationChannelsGetVerificationCodeQueryParams:
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
class MonitoringProjectsNotificationChannelsGetVerificationCodeSecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class MonitoringProjectsNotificationChannelsGetVerificationCodeSecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class MonitoringProjectsNotificationChannelsGetVerificationCodeSecurity:
    option1: Optional[MonitoringProjectsNotificationChannelsGetVerificationCodeSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[MonitoringProjectsNotificationChannelsGetVerificationCodeSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class MonitoringProjectsNotificationChannelsGetVerificationCodeRequest:
    path_params: MonitoringProjectsNotificationChannelsGetVerificationCodePathParams = dataclasses.field()
    query_params: MonitoringProjectsNotificationChannelsGetVerificationCodeQueryParams = dataclasses.field()
    security: MonitoringProjectsNotificationChannelsGetVerificationCodeSecurity = dataclasses.field()
    request: Optional[shared_getnotificationchannelverificationcoderequest.GetNotificationChannelVerificationCodeRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class MonitoringProjectsNotificationChannelsGetVerificationCodeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_notification_channel_verification_code_response: Optional[shared_getnotificationchannelverificationcoderesponse.GetNotificationChannelVerificationCodeResponse] = dataclasses.field(default=None)
    
