import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteVersionPathParams:
    version_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'versionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteVersionSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteVersionRequest:
    path_params: DeleteVersionPathParams = dataclasses.field()
    security: DeleteVersionSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteVersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
