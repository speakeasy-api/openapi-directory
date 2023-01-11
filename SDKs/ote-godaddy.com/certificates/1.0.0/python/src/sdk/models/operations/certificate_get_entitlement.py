import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CertificateGetEntitlementQueryParams:
    entitlement_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'entitlementId', 'style': 'form', 'explode': True }})
    latest: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'latest', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CertificateGetEntitlementRequest:
    query_params: CertificateGetEntitlementQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CertificateGetEntitlementResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    certificates: Optional[list[Any]] = dataclasses.field(default=None)
    error: Optional[Any] = dataclasses.field(default=None)
    
