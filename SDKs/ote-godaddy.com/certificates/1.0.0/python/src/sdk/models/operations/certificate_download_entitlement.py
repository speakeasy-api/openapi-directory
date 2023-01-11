import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CertificateDownloadEntitlementQueryParams:
    entitlement_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'entitlementId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CertificateDownloadEntitlementRequest:
    query_params: CertificateDownloadEntitlementQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CertificateDownloadEntitlementResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    certificate_bundle: Optional[Any] = dataclasses.field(default=None)
    error: Optional[Any] = dataclasses.field(default=None)
    
