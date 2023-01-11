import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import responsepolicyrule as shared_responsepolicyrule
from ..shared import responsepolicyrulesupdateresponse as shared_responsepolicyrulesupdateresponse


@dataclasses.dataclass
class DNSResponsePolicyRulesUpdatePathParams:
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    response_policy: str = dataclasses.field(metadata={'path_param': { 'field_name': 'responsePolicy', 'style': 'simple', 'explode': False }})
    response_policy_rule: str = dataclasses.field(metadata={'path_param': { 'field_name': 'responsePolicyRule', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DNSResponsePolicyRulesUpdateQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    client_operation_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'clientOperationId', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DNSResponsePolicyRulesUpdateSecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DNSResponsePolicyRulesUpdateSecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DNSResponsePolicyRulesUpdateSecurity:
    option1: Optional[DNSResponsePolicyRulesUpdateSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DNSResponsePolicyRulesUpdateSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class DNSResponsePolicyRulesUpdateRequest:
    path_params: DNSResponsePolicyRulesUpdatePathParams = dataclasses.field()
    query_params: DNSResponsePolicyRulesUpdateQueryParams = dataclasses.field()
    security: DNSResponsePolicyRulesUpdateSecurity = dataclasses.field()
    request: Optional[shared_responsepolicyrule.ResponsePolicyRule] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DNSResponsePolicyRulesUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_policy_rules_update_response: Optional[shared_responsepolicyrulesupdateresponse.ResponsePolicyRulesUpdateResponse] = dataclasses.field(default=None)
    
