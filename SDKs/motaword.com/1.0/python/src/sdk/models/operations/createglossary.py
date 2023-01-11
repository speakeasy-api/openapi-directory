import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import glossary as shared_glossary


@dataclasses.dataclass
class CreateGlossaryPathParams:
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateGlossaryRequestBodyGlossaries:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    glossaries: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'glossaries' }})
    

@dataclasses.dataclass
class CreateGlossaryRequestBody:
    glossaries: CreateGlossaryRequestBodyGlossaries = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class CreateGlossaryRequest:
    path_params: CreateGlossaryPathParams = dataclasses.field()
    request: Optional[CreateGlossaryRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class CreateGlossaryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    glossary: Optional[shared_glossary.Glossary] = dataclasses.field(default=None)
    
