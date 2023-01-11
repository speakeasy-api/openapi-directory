import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import googlecloudorgpolicyv2customconstraint as shared_googlecloudorgpolicyv2customconstraint
from ..shared import googlecloudorgpolicyv2customconstraint as shared_googlecloudorgpolicyv2customconstraint


@dataclasses.dataclass
class OrgpolicyOrganizationsCustomConstraintsCreatePathParams:
    parent: str = dataclasses.field(metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OrgpolicyOrganizationsCustomConstraintsCreateQueryParams:
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
class OrgpolicyOrganizationsCustomConstraintsCreateSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class OrgpolicyOrganizationsCustomConstraintsCreateRequest:
    path_params: OrgpolicyOrganizationsCustomConstraintsCreatePathParams = dataclasses.field()
    query_params: OrgpolicyOrganizationsCustomConstraintsCreateQueryParams = dataclasses.field()
    security: OrgpolicyOrganizationsCustomConstraintsCreateSecurity = dataclasses.field()
    request: Optional[shared_googlecloudorgpolicyv2customconstraint.GoogleCloudOrgpolicyV2CustomConstraintInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class OrgpolicyOrganizationsCustomConstraintsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    google_cloud_orgpolicy_v2_custom_constraint: Optional[shared_googlecloudorgpolicyv2customconstraint.GoogleCloudOrgpolicyV2CustomConstraint] = dataclasses.field(default=None)
    
