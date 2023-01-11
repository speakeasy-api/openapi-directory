import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class LandlordControllerGetInvoicePathParams:
    short_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LandlordControllerGetInvoiceQueryParams:
    invoice_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'invoiceID', 'style': 'form', 'explode': True }})
    token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class LandlordControllerGetInvoiceRequest:
    path_params: LandlordControllerGetInvoicePathParams = dataclasses.field()
    query_params: LandlordControllerGetInvoiceQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class LandlordControllerGetInvoiceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
