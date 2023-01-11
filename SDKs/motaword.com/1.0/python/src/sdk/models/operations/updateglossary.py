import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import error as shared_error
from ..shared import glossary as shared_glossary


@dataclasses.dataclass
class UpdateGlossaryPathParams:
    glossary_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'glossaryId', 'style': 'simple', 'explode': False }})
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateGlossaryRequestBodyGlossaries:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    glossaries: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'glossaries' }})
    

@dataclasses.dataclass
class UpdateGlossaryRequestBody:
    glossaries: UpdateGlossaryRequestBodyGlossaries = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class UpdateGlossaryRequest:
    path_params: UpdateGlossaryPathParams = dataclasses.field()
    request: Optional[UpdateGlossaryRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UpdateGlossaryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    glossary: Optional[shared_glossary.Glossary] = dataclasses.field(default=None)
    
