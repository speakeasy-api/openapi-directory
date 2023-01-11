import dataclasses
from typing import Optional
from enum import Enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import remarketingaudience as shared_remarketingaudience
from ..shared import remarketingaudience as shared_remarketingaudience


@dataclasses.dataclass
class AnalyticsManagementRemarketingAudiencePatchPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    remarketing_audience_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'remarketingAudienceId', 'style': 'simple', 'explode': False }})
    web_property_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'webPropertyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AnalyticsManagementRemarketingAudiencePatchQueryParams:
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AnalyticsManagementRemarketingAudiencePatchSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AnalyticsManagementRemarketingAudiencePatchRequest:
    path_params: AnalyticsManagementRemarketingAudiencePatchPathParams = dataclasses.field()
    query_params: AnalyticsManagementRemarketingAudiencePatchQueryParams = dataclasses.field()
    security: AnalyticsManagementRemarketingAudiencePatchSecurity = dataclasses.field()
    request: Optional[shared_remarketingaudience.RemarketingAudienceInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AnalyticsManagementRemarketingAudiencePatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    remarketing_audience: Optional[shared_remarketingaudience.RemarketingAudience] = dataclasses.field(default=None)
    
