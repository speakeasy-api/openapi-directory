import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from ..shared import security as shared_security
from ..shared import custompage as shared_custompage


@dataclasses.dataclass
class UpdateCustomPagePathParams:
    slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateCustomPageSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateCustomPageRequest:
    path_params: UpdateCustomPagePathParams = dataclasses.field()
    request: shared_custompage.CustomPage = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateCustomPageSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UpdateCustomPageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
