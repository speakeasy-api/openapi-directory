import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CertificateGetPathParams:
    certificate_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'certificateId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CertificateGetRequest:
    path_params: CertificateGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CertificateGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    certificate: Optional[Any] = dataclasses.field(default=None)
    error: Optional[Any] = dataclasses.field(default=None)
    
