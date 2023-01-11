import dataclasses
from typing import Optional
from enum import Enum
from ..shared import billinclude_enum as shared_billinclude_enum
from ..shared import bill as shared_bill
from ..shared import httpvalidationerror as shared_httpvalidationerror


@dataclasses.dataclass
class BillDetailBillsJurisdictionSessionBillIDGetPathParams:
    bill_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'bill_id', 'style': 'simple', 'explode': False }})
    jurisdiction: str = dataclasses.field(metadata={'path_param': { 'field_name': 'jurisdiction', 'style': 'simple', 'explode': False }})
    session: str = dataclasses.field(metadata={'path_param': { 'field_name': 'session', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BillDetailBillsJurisdictionSessionBillIDGetQueryParams:
    apikey: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'apikey', 'style': 'form', 'explode': True }})
    include: Optional[list[shared_billinclude_enum.BillIncludeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class BillDetailBillsJurisdictionSessionBillIDGetHeaders:
    x_api_key: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BillDetailBillsJurisdictionSessionBillIDGetRequest:
    headers: BillDetailBillsJurisdictionSessionBillIDGetHeaders = dataclasses.field()
    path_params: BillDetailBillsJurisdictionSessionBillIDGetPathParams = dataclasses.field()
    query_params: BillDetailBillsJurisdictionSessionBillIDGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class BillDetailBillsJurisdictionSessionBillIDGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bill: Optional[shared_bill.Bill] = dataclasses.field(default=None)
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    
