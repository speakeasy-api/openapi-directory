import dataclasses
from ..shared import security as shared_security
from ..shared import changelog as shared_changelog


@dataclasses.dataclass
class CreateChangelogSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateChangelogRequest:
    request: shared_changelog.Changelog = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateChangelogSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateChangelogResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
