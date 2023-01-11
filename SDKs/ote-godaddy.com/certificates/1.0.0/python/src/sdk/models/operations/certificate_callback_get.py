import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CertificateCallbackGetPathParams:
    certificate_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'certificateId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CertificateCallbackGetRequest:
    path_params: CertificateCallbackGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CertificateCallbackGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    certificate_callback: Optional[Any] = dataclasses.field(default=None)
    error: Optional[Any] = dataclasses.field(default=None)
    
