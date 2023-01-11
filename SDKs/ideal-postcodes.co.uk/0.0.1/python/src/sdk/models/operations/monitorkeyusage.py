import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import errorresponseschema as shared_errorresponseschema
from ..shared import keyusageresponseschema as shared_keyusageresponseschema


@dataclasses.dataclass
class MonitorKeyUsagePathParams:
    key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MonitorKeyUsageQueryParams:
    end: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'end', 'style': 'form', 'explode': True }})
    licensee: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'licensee', 'style': 'form', 'explode': True }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    tags: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class MonitorKeyUsageSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    user_token: shared_security.SchemeUserToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class MonitorKeyUsageRequest:
    path_params: MonitorKeyUsagePathParams = dataclasses.field()
    query_params: MonitorKeyUsageQueryParams = dataclasses.field()
    security: MonitorKeyUsageSecurity = dataclasses.field()
    

@dataclasses.dataclass
class MonitorKeyUsageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_schema: Optional[shared_errorresponseschema.ErrorResponseSchema] = dataclasses.field(default=None)
    key_usage_response_schema: Optional[shared_keyusageresponseschema.KeyUsageResponseSchema] = dataclasses.field(default=None)
    
