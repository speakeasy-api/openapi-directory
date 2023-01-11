import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class UpdateAPISpecificationPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateAPISpecificationRequestBodySpec:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    spec: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'spec' }})
    

@dataclasses.dataclass
class UpdateAPISpecificationRequestBody:
    spec: Optional[UpdateAPISpecificationRequestBodySpec] = dataclasses.field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class UpdateAPISpecificationSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateAPISpecificationRequest:
    path_params: UpdateAPISpecificationPathParams = dataclasses.field()
    request: UpdateAPISpecificationRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: UpdateAPISpecificationSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UpdateAPISpecificationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
