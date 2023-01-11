import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import error as shared_error
from ..shared import operationstatus as shared_operationstatus


@dataclasses.dataclass
class UpdateGlobalStyleGuideRequestBodyStyleguide:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    styleguide: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'styleguide' }})
    

@dataclasses.dataclass
class UpdateGlobalStyleGuideRequestBody:
    styleguide: UpdateGlobalStyleGuideRequestBodyStyleguide = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class UpdateGlobalStyleGuideRequest:
    request: Optional[UpdateGlobalStyleGuideRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UpdateGlobalStyleGuideResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    operation_status: Optional[shared_operationstatus.OperationStatus] = dataclasses.field(default=None)
    
