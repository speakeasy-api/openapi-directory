import dataclasses
from typing import Optional
from enum import Enum
from ..shared import billinclude_enum as shared_billinclude_enum
from ..shared import bill as shared_bill
from ..shared import httpvalidationerror as shared_httpvalidationerror


@dataclasses.dataclass
class BillDetailByIDBillsOcdBillOpenstatesBillIDGetPathParams:
    openstates_bill_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'openstates_bill_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BillDetailByIDBillsOcdBillOpenstatesBillIDGetQueryParams:
    apikey: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'apikey', 'style': 'form', 'explode': True }})
    include: Optional[list[shared_billinclude_enum.BillIncludeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class BillDetailByIDBillsOcdBillOpenstatesBillIDGetHeaders:
    x_api_key: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BillDetailByIDBillsOcdBillOpenstatesBillIDGetRequest:
    headers: BillDetailByIDBillsOcdBillOpenstatesBillIDGetHeaders = dataclasses.field()
    path_params: BillDetailByIDBillsOcdBillOpenstatesBillIDGetPathParams = dataclasses.field()
    query_params: BillDetailByIDBillsOcdBillOpenstatesBillIDGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class BillDetailByIDBillsOcdBillOpenstatesBillIDGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bill: Optional[shared_bill.Bill] = dataclasses.field(default=None)
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    
