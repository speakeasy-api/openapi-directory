import dataclasses
from ..shared import security as shared_security
from ..shared import version as shared_version


@dataclasses.dataclass
class CreateVersionSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateVersionRequest:
    request: shared_version.Version = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateVersionSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateVersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
