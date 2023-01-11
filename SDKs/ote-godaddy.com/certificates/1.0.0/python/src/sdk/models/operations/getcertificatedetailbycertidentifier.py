import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetCertificateDetailByCertIdentifierPathParams:
    certificate_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'certificateId', 'style': 'simple', 'explode': False }})
    customer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'customerId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCertificateDetailByCertIdentifierRequest:
    path_params: GetCertificateDetailByCertIdentifierPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCertificateDetailByCertIdentifierResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    certificate_detail_v2: Optional[Any] = dataclasses.field(default=None)
    
