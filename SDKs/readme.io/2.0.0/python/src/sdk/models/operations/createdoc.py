import dataclasses
from ..shared import security as shared_security
from ..shared import doc as shared_doc


@dataclasses.dataclass
class CreateDocHeaders:
    x_readme_version: str = dataclasses.field(metadata={'header': { 'field_name': 'x-readme-version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateDocSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateDocRequest:
    headers: CreateDocHeaders = dataclasses.field()
    request: shared_doc.Doc = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateDocSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateDocResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
