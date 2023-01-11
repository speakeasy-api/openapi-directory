import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import httpbody as shared_httpbody


@dataclasses.dataclass
class MonitoringProjectsLocationPrometheusAPIV1LabelValuesPathParams:
    label: str = dataclasses.field(metadata={'path_param': { 'field_name': 'label', 'style': 'simple', 'explode': False }})
    location: str = dataclasses.field(metadata={'path_param': { 'field_name': 'location', 'style': 'simple', 'explode': False }})
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MonitoringProjectsLocationPrometheusAPIV1LabelValuesQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    end: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'end', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    match: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'match', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    start: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class MonitoringProjectsLocationPrometheusAPIV1LabelValuesSecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class MonitoringProjectsLocationPrometheusAPIV1LabelValuesSecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class MonitoringProjectsLocationPrometheusAPIV1LabelValuesSecurityOption3:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class MonitoringProjectsLocationPrometheusAPIV1LabelValuesSecurity:
    option1: Optional[MonitoringProjectsLocationPrometheusAPIV1LabelValuesSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[MonitoringProjectsLocationPrometheusAPIV1LabelValuesSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[MonitoringProjectsLocationPrometheusAPIV1LabelValuesSecurityOption3] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class MonitoringProjectsLocationPrometheusAPIV1LabelValuesRequest:
    path_params: MonitoringProjectsLocationPrometheusAPIV1LabelValuesPathParams = dataclasses.field()
    query_params: MonitoringProjectsLocationPrometheusAPIV1LabelValuesQueryParams = dataclasses.field()
    security: MonitoringProjectsLocationPrometheusAPIV1LabelValuesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class MonitoringProjectsLocationPrometheusAPIV1LabelValuesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    http_body: Optional[shared_httpbody.HTTPBody] = dataclasses.field(default=None)
    
