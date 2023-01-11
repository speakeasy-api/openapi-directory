import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import completequeryresponse as shared_completequeryresponse


@dataclasses.dataclass
class JobsProjectsTenantsCompleteQueryPathParams:
    tenant: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tenant', 'style': 'simple', 'explode': False }})
    
class JobsProjectsTenantsCompleteQueryScopeEnum(str, Enum):
    COMPLETION_SCOPE_UNSPECIFIED = "COMPLETION_SCOPE_UNSPECIFIED"
    TENANT = "TENANT"
    PUBLIC = "PUBLIC"

class JobsProjectsTenantsCompleteQueryTypeEnum(str, Enum):
    COMPLETION_TYPE_UNSPECIFIED = "COMPLETION_TYPE_UNSPECIFIED"
    JOB_TITLE = "JOB_TITLE"
    COMPANY_NAME = "COMPANY_NAME"
    COMBINED = "COMBINED"


@dataclasses.dataclass
class JobsProjectsTenantsCompleteQueryQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    company: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'company', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    language_codes: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'languageCodes', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    scope: Optional[JobsProjectsTenantsCompleteQueryScopeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'scope', 'style': 'form', 'explode': True }})
    type: Optional[JobsProjectsTenantsCompleteQueryTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class JobsProjectsTenantsCompleteQuerySecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class JobsProjectsTenantsCompleteQuerySecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class JobsProjectsTenantsCompleteQuerySecurity:
    option1: Optional[JobsProjectsTenantsCompleteQuerySecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[JobsProjectsTenantsCompleteQuerySecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class JobsProjectsTenantsCompleteQueryRequest:
    path_params: JobsProjectsTenantsCompleteQueryPathParams = dataclasses.field()
    query_params: JobsProjectsTenantsCompleteQueryQueryParams = dataclasses.field()
    security: JobsProjectsTenantsCompleteQuerySecurity = dataclasses.field()
    

@dataclasses.dataclass
class JobsProjectsTenantsCompleteQueryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    complete_query_response: Optional[shared_completequeryresponse.CompleteQueryResponse] = dataclasses.field(default=None)
    
