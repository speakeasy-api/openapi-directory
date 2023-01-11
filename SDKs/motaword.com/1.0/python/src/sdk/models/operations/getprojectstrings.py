import dataclasses
from typing import Optional
from ..shared import stringlist as shared_stringlist


@dataclasses.dataclass
class GetProjectStringsPathParams:
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProjectStringsRequest:
    path_params: GetProjectStringsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetProjectStringsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    string_list: Optional[shared_stringlist.StringList] = dataclasses.field(default=None)
    
