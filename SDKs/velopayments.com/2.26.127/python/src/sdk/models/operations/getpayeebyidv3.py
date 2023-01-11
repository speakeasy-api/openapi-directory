import dataclasses
from typing import Optional
from ..shared import payeedetailresponse as shared_payeedetailresponse


@dataclasses.dataclass
class GetPayeeByIDV3PathParams:
    payee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payeeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPayeeByIDV3QueryParams:
    sensitive: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sensitive', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPayeeByIDV3Request:
    path_params: GetPayeeByIDV3PathParams = dataclasses.field()
    query_params: GetPayeeByIDV3QueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPayeeByIDV3Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    payee_detail_response: Optional[shared_payeedetailresponse.PayeeDetailResponse] = dataclasses.field(default=None)
    
