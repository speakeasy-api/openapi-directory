import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CertificateRevokePathParams:
    certificate_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'certificateId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CertificateRevokeRequest:
    path_params: CertificateRevokePathParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CertificateRevokeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[Any] = dataclasses.field(default=None)
    
