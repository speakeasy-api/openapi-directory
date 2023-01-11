import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from ..shared import security as shared_security
from ..shared import version as shared_version


@dataclasses.dataclass
class UpdateVersionPathParams:
    version_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'versionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateVersionSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateVersionRequest:
    path_params: UpdateVersionPathParams = dataclasses.field()
    request: shared_version.Version = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateVersionSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UpdateVersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
