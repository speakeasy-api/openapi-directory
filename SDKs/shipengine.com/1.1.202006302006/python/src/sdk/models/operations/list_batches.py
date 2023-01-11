import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import batches_sort_by_enum as shared_batches_sort_by_enum
from ..shared import batch_status_enum as shared_batch_status_enum
from ..shared import error_response_body as shared_error_response_body
from ..shared import list_batches_response_body as shared_list_batches_response_body


@dataclasses.dataclass
class ListBatchesQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    sort_by: Optional[shared_batches_sort_by_enum.BatchesSortByEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'form', 'explode': True }})
    sort_dir: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_dir', 'style': 'form', 'explode': True }})
    status: Optional[shared_batch_status_enum.BatchStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListBatchesRequest:
    query_params: ListBatchesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListBatchesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    list_batches_response_body: Optional[shared_list_batches_response_body.ListBatchesResponseBody] = dataclasses.field(default=None)
    
