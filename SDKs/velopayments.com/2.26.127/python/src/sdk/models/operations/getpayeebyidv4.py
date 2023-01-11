import dataclasses
from typing import Optional
from ..shared import payeedetailresponse_2 as shared_payeedetailresponse_2


@dataclasses.dataclass
class GetPayeeByIDV4PathParams:
    payee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payeeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPayeeByIDV4QueryParams:
    sensitive: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sensitive', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPayeeByIDV4Request:
    path_params: GetPayeeByIDV4PathParams = dataclasses.field()
    query_params: GetPayeeByIDV4QueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPayeeByIDV4Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    payee_detail_response_2: Optional[shared_payeedetailresponse_2.PayeeDetailResponse2] = dataclasses.field(default=None)
    
