import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import analyzeiampolicyresponse as shared_analyzeiampolicyresponse


@dataclasses.dataclass
class CloudassetAnalyzeIamPolicyPathParams:
    parent: str = dataclasses.field(metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CloudassetAnalyzeIamPolicyQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    analysis_query_access_selector_permissions: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'analysisQuery.accessSelector.permissions', 'style': 'form', 'explode': True }})
    analysis_query_access_selector_roles: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'analysisQuery.accessSelector.roles', 'style': 'form', 'explode': True }})
    analysis_query_identity_selector_identity: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'analysisQuery.identitySelector.identity', 'style': 'form', 'explode': True }})
    analysis_query_resource_selector_full_resource_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'analysisQuery.resourceSelector.fullResourceName', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    options_analyze_service_account_impersonation: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'options.analyzeServiceAccountImpersonation', 'style': 'form', 'explode': True }})
    options_execution_timeout: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'options.executionTimeout', 'style': 'form', 'explode': True }})
    options_expand_groups: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'options.expandGroups', 'style': 'form', 'explode': True }})
    options_expand_resources: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'options.expandResources', 'style': 'form', 'explode': True }})
    options_expand_roles: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'options.expandRoles', 'style': 'form', 'explode': True }})
    options_output_group_edges: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'options.outputGroupEdges', 'style': 'form', 'explode': True }})
    options_output_resource_edges: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'options.outputResourceEdges', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CloudassetAnalyzeIamPolicySecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CloudassetAnalyzeIamPolicyRequest:
    path_params: CloudassetAnalyzeIamPolicyPathParams = dataclasses.field()
    query_params: CloudassetAnalyzeIamPolicyQueryParams = dataclasses.field()
    security: CloudassetAnalyzeIamPolicySecurity = dataclasses.field()
    

@dataclasses.dataclass
class CloudassetAnalyzeIamPolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    analyze_iam_policy_response: Optional[shared_analyzeiampolicyresponse.AnalyzeIamPolicyResponse] = dataclasses.field(default=None)
    
