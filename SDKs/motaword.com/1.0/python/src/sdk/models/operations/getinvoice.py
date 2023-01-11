import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import invoice as shared_invoice


@dataclasses.dataclass
class GetInvoicePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetInvoiceRequest:
    path_params: GetInvoicePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetInvoiceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    invoice: Optional[shared_invoice.Invoice] = dataclasses.field(default=None)
    
