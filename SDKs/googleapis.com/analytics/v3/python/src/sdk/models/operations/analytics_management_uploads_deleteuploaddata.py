import dataclasses
from typing import Optional
from enum import Enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import analyticsdataimportdeleteuploaddatarequest as shared_analyticsdataimportdeleteuploaddatarequest


@dataclasses.dataclass
class AnalyticsManagementUploadsDeleteUploadDataPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    custom_data_source_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'customDataSourceId', 'style': 'simple', 'explode': False }})
    web_property_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'webPropertyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AnalyticsManagementUploadsDeleteUploadDataQueryParams:
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AnalyticsManagementUploadsDeleteUploadDataSecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AnalyticsManagementUploadsDeleteUploadDataSecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AnalyticsManagementUploadsDeleteUploadDataSecurity:
    option1: Optional[AnalyticsManagementUploadsDeleteUploadDataSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[AnalyticsManagementUploadsDeleteUploadDataSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class AnalyticsManagementUploadsDeleteUploadDataRequest:
    path_params: AnalyticsManagementUploadsDeleteUploadDataPathParams = dataclasses.field()
    query_params: AnalyticsManagementUploadsDeleteUploadDataQueryParams = dataclasses.field()
    security: AnalyticsManagementUploadsDeleteUploadDataSecurity = dataclasses.field()
    request: Optional[shared_analyticsdataimportdeleteuploaddatarequest.AnalyticsDataimportDeleteUploadDataRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AnalyticsManagementUploadsDeleteUploadDataResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
