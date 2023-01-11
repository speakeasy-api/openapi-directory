import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetInvoiceJSONPathParams:
    guid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'guid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetInvoiceJSONQueryParams:
    pmv: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pmv', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetInvoiceJSONRequest:
    path_params: GetInvoiceJSONPathParams = dataclasses.field()
    query_params: GetInvoiceJSONQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetInvoiceJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    purchase_invoice: Optional[Any] = dataclasses.field(default=None)
    
