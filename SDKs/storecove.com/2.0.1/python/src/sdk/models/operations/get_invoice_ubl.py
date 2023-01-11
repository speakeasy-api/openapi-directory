import dataclasses
from typing import Any,Optional
from enum import Enum

class GetInvoiceUblPackagingEnum(str, Enum):
    JSON = "json"
    UBL = "ubl"


@dataclasses.dataclass
class GetInvoiceUblPathParams:
    guid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'guid', 'style': 'simple', 'explode': False }})
    packaging: GetInvoiceUblPackagingEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'packaging', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetInvoiceUblRequest:
    path_params: GetInvoiceUblPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetInvoiceUblResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    purchase_invoice_ubl: Optional[Any] = dataclasses.field(default=None)
    
