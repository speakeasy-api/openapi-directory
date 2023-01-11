import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CertificateCallbackDeletePathParams:
    certificate_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'certificateId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CertificateCallbackDeleteRequest:
    path_params: CertificateCallbackDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class CertificateCallbackDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[Any] = dataclasses.field(default=None)
    
