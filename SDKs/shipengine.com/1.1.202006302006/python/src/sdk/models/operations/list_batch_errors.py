import dataclasses
from typing import Optional
from ..shared import error_response_body as shared_error_response_body
from ..shared import list_batch_errors_response_body as shared_list_batch_errors_response_body


@dataclasses.dataclass
class ListBatchErrorsPathParams:
    batch_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'batch_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListBatchErrorsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListBatchErrorsRequest:
    path_params: ListBatchErrorsPathParams = dataclasses.field()
    query_params: ListBatchErrorsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListBatchErrorsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    list_batch_errors_response_body: Optional[shared_list_batch_errors_response_body.ListBatchErrorsResponseBody] = dataclasses.field(default=None)
    
