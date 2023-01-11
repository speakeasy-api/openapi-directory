import dataclasses
from typing import Optional
from enum import Enum
from ..shared import documentlist as shared_documentlist


@dataclasses.dataclass
class GetSimilarDocumentsPathParams:
    document_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'documentId', 'style': 'simple', 'explode': False }})
    
class GetSimilarDocumentsWithEnum(str, Enum):
    PREVIEW = "preview"
    EDITORS = "editors"


@dataclasses.dataclass
class GetSimilarDocumentsQueryParams:
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    with_: Optional[list[GetSimilarDocumentsWithEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'with[]', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSimilarDocumentsRequest:
    path_params: GetSimilarDocumentsPathParams = dataclasses.field()
    query_params: GetSimilarDocumentsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSimilarDocumentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    document_list: Optional[shared_documentlist.DocumentList] = dataclasses.field(default=None)
    
