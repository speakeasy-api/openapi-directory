import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import error as shared_error
from ..shared import operationstatus as shared_operationstatus


@dataclasses.dataclass
class UpdateGlobalGlossaryRequestBodyGlossary:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    glossary: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'glossary' }})
    

@dataclasses.dataclass
class UpdateGlobalGlossaryRequestBody:
    glossary: UpdateGlobalGlossaryRequestBodyGlossary = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class UpdateGlobalGlossaryRequest:
    request: Optional[UpdateGlobalGlossaryRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UpdateGlobalGlossaryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    operation_status: Optional[shared_operationstatus.OperationStatus] = dataclasses.field(default=None)
    
