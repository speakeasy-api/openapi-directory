import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import glossary as shared_glossary


@dataclasses.dataclass
class GetGlossaryPathParams:
    glossary_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'glossaryId', 'style': 'simple', 'explode': False }})
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGlossaryRequest:
    path_params: GetGlossaryPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGlossaryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    glossary: Optional[shared_glossary.Glossary] = dataclasses.field(default=None)
    
