import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetDomainInformationByCertificateIDPathParams:
    certificate_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'certificateId', 'style': 'simple', 'explode': False }})
    customer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'customerId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDomainInformationByCertificateIDRequest:
    path_params: GetDomainInformationByCertificateIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDomainInformationByCertificateIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    domain_verification_summaries: Optional[list[Any]] = dataclasses.field(default=None)
    
