import dataclasses
from typing import Any,Optional
from ..shared import createpayeescsvrequest_2 as shared_createpayeescsvrequest_2
from ..shared import createpayeesrequest_2 as shared_createpayeesrequest_2
from ..shared import createpayeescsvresponse_2 as shared_createpayeescsvresponse_2


@dataclasses.dataclass
class V4CreatePayeeMultipartFormData:
    file: Optional[list[shared_createpayeescsvrequest_2.CreatePayeesCsvRequest2]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'file', 'json': True }})
    payor_id: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'payorId' }})
    

@dataclasses.dataclass
class V4CreatePayeeRequestsInput:
    create_payees_request_2: Optional[shared_createpayeesrequest_2.CreatePayeesRequest2Input] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object: Optional[V4CreatePayeeMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class V4CreatePayeeRequest:
    request: Optional[V4CreatePayeeRequestsInput] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class V4CreatePayeeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_payees_csv_response_2: Optional[shared_createpayeescsvresponse_2.CreatePayeesCsvResponse2] = dataclasses.field(default=None)
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    
