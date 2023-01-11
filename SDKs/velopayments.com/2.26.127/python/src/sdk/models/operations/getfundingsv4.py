import dataclasses
from typing import Any,Optional
from ..shared import getfundingsresponse as shared_getfundingsresponse


@dataclasses.dataclass
class GetFundingsV4QueryParams:
    payor_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'payorId', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFundingsV4Request:
    query_params: GetFundingsV4QueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFundingsV4Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_fundings_response: Optional[shared_getfundingsresponse.GetFundingsResponse] = dataclasses.field(default=None)
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    
