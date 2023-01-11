import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import glossarylist as shared_glossarylist


@dataclasses.dataclass
class GetGlossariesPathParams:
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGlossariesRequest:
    path_params: GetGlossariesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGlossariesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    glossary_list: Optional[shared_glossarylist.GlossaryList] = dataclasses.field(default=None)
    
