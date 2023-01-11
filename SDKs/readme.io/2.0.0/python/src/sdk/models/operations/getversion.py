import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class GetVersionPathParams:
    version_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'versionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVersionSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetVersionRequest:
    path_params: GetVersionPathParams = dataclasses.field()
    security: GetVersionSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetVersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
