import dataclasses
from typing import Optional
from ..shared import paginatedapplicationdocumentresult as shared_paginatedapplicationdocumentresult


@dataclasses.dataclass
class GetApplicationDocumentsPathParams:
    application_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'application_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetApplicationDocumentsQueryParams:
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetApplicationDocumentsRequest:
    path_params: GetApplicationDocumentsPathParams = dataclasses.field()
    query_params: GetApplicationDocumentsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetApplicationDocumentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paginated_application_document_result: Optional[shared_paginatedapplicationdocumentresult.PaginatedApplicationDocumentResult] = dataclasses.field(default=None)
    
