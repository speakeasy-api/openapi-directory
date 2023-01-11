import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CertificateVerifydomaincontrolPathParams:
    certificate_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'certificateId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CertificateVerifydomaincontrolRequest:
    path_params: CertificateVerifydomaincontrolPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CertificateVerifydomaincontrolResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[Any] = dataclasses.field(default=None)
    
