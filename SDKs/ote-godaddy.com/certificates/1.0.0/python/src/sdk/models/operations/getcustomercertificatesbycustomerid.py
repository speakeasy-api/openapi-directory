import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetCustomerCertificatesByCustomerIDPathParams:
    customer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'customerId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCustomerCertificatesByCustomerIDQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCustomerCertificatesByCustomerIDRequest:
    path_params: GetCustomerCertificatesByCustomerIDPathParams = dataclasses.field()
    query_params: GetCustomerCertificatesByCustomerIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCustomerCertificatesByCustomerIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    certificate_summaries_v2: Optional[Any] = dataclasses.field(default=None)
    
