import dataclasses
from typing import Optional
from enum import Enum
from ..shared import documentlist as shared_documentlist
from ..shared import error as shared_error


@dataclasses.dataclass
class GetProjectDocumentsPathParams:
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    
class GetProjectDocumentsWithEnum(str, Enum):
    PREVIEW = "preview"
    EDITORS = "editors"


@dataclasses.dataclass
class GetProjectDocumentsQueryParams:
    with_: Optional[list[GetProjectDocumentsWithEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'with[]', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetProjectDocumentsRequest:
    path_params: GetProjectDocumentsPathParams = dataclasses.field()
    query_params: GetProjectDocumentsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetProjectDocumentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    document_list: Optional[shared_documentlist.DocumentList] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
