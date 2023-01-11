import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CertificateActionRetrievePathParams:
    certificate_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'certificateId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CertificateActionRetrieveRequest:
    path_params: CertificateActionRetrievePathParams = dataclasses.field()
    

@dataclasses.dataclass
class CertificateActionRetrieveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    array_of_certificate_action: Optional[list[Any]] = dataclasses.field(default=None)
    error: Optional[Any] = dataclasses.field(default=None)
    
