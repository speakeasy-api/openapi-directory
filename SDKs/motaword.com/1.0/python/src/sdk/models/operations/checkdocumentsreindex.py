import dataclasses
from typing import Optional
from ..shared import asyncoperationstatus as shared_asyncoperationstatus


@dataclasses.dataclass
class CheckDocumentsReindexQueryParams:
    async_request_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'async_request_key', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CheckDocumentsReindexRequest:
    query_params: CheckDocumentsReindexQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CheckDocumentsReindexResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    async_operation_status: Optional[shared_asyncoperationstatus.AsyncOperationStatus] = dataclasses.field(default=None)
    
