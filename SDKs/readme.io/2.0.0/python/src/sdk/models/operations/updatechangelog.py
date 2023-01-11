import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from ..shared import security as shared_security
from ..shared import changelog as shared_changelog


@dataclasses.dataclass
class UpdateChangelogPathParams:
    slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateChangelogSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateChangelogRequest:
    path_params: UpdateChangelogPathParams = dataclasses.field()
    request: shared_changelog.Changelog = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateChangelogSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UpdateChangelogResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
