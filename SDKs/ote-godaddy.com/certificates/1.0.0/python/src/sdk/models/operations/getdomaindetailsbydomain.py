import dataclasses
from typing import Optional
from ..shared import domainverificationdetail as shared_domainverificationdetail


@dataclasses.dataclass
class GetDomainDetailsByDomainPathParams:
    certificate_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'certificateId', 'style': 'simple', 'explode': False }})
    customer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'customerId', 'style': 'simple', 'explode': False }})
    domain: str = dataclasses.field(metadata={'path_param': { 'field_name': 'domain', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDomainDetailsByDomainRequest:
    path_params: GetDomainDetailsByDomainPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDomainDetailsByDomainResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    domain_verification_detail: Optional[shared_domainverificationdetail.DomainVerificationDetail] = dataclasses.field(default=None)
    
