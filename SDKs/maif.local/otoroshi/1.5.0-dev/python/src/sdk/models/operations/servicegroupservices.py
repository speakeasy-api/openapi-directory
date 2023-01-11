import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apikey as shared_apikey


@dataclasses.dataclass
class ServiceGroupServicesPathParams:
    service_group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serviceGroupId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ServiceGroupServicesSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class ServiceGroupServicesRequest:
    path_params: ServiceGroupServicesPathParams = dataclasses.field()
    security: ServiceGroupServicesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ServiceGroupServicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_keys: Optional[list[shared_apikey.APIKey]] = dataclasses.field(default=None)
    
