import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class UpdateSwaggerPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSwaggerRequestBodySwagger:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    swagger: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'swagger' }})
    

@dataclasses.dataclass
class UpdateSwaggerRequestBody:
    swagger: Optional[UpdateSwaggerRequestBodySwagger] = dataclasses.field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class UpdateSwaggerSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateSwaggerRequest:
    path_params: UpdateSwaggerPathParams = dataclasses.field()
    request: UpdateSwaggerRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: UpdateSwaggerSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UpdateSwaggerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
