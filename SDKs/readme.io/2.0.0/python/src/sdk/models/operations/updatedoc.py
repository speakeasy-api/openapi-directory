import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from ..shared import security as shared_security
from ..shared import doc as shared_doc


@dataclasses.dataclass
class UpdateDocPathParams:
    slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateDocHeaders:
    x_readme_version: str = dataclasses.field(metadata={'header': { 'field_name': 'x-readme-version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateDocSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateDocRequest:
    headers: UpdateDocHeaders = dataclasses.field()
    path_params: UpdateDocPathParams = dataclasses.field()
    request: shared_doc.Doc = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateDocSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UpdateDocResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
