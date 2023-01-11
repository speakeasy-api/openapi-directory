import dataclasses
from typing import Any,Optional
from ..shared import querybatchresponse as shared_querybatchresponse


@dataclasses.dataclass
class QueryBatchStatusV3PathParams:
    batch_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'batchId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class QueryBatchStatusV3Request:
    path_params: QueryBatchStatusV3PathParams = dataclasses.field()
    

@dataclasses.dataclass
class QueryBatchStatusV3Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    query_batch_response: Optional[shared_querybatchresponse.QueryBatchResponse] = dataclasses.field(default=None)
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    
