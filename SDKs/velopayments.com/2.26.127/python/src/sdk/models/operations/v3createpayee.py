import dataclasses
from typing import Any,Optional
from ..shared import createpayeescsvrequest as shared_createpayeescsvrequest
from ..shared import createpayeesrequest as shared_createpayeesrequest
from ..shared import createpayeescsvresponse as shared_createpayeescsvresponse


@dataclasses.dataclass
class V3CreatePayeeMultipartFormData:
    file: Optional[list[shared_createpayeescsvrequest.CreatePayeesCsvRequest]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'file', 'json': True }})
    payor_id: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'payorId' }})
    

@dataclasses.dataclass
class V3CreatePayeeRequestsInput:
    create_payees_request: Optional[shared_createpayeesrequest.CreatePayeesRequestInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object: Optional[V3CreatePayeeMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class V3CreatePayeeRequest:
    request: Optional[V3CreatePayeeRequestsInput] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class V3CreatePayeeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_payees_csv_response: Optional[shared_createpayeescsvresponse.CreatePayeesCsvResponse] = dataclasses.field(default=None)
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    
