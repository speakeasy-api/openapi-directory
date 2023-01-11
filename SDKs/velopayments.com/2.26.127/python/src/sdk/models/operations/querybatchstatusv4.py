import dataclasses
from typing import Any,Optional
from ..shared import querybatchresponse_2 as shared_querybatchresponse_2


@dataclasses.dataclass
class QueryBatchStatusV4PathParams:
    batch_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'batchId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class QueryBatchStatusV4Request:
    path_params: QueryBatchStatusV4PathParams = dataclasses.field()
    

@dataclasses.dataclass
class QueryBatchStatusV4Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    query_batch_response_2: Optional[shared_querybatchresponse_2.QueryBatchResponse2] = dataclasses.field(default=None)
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    
