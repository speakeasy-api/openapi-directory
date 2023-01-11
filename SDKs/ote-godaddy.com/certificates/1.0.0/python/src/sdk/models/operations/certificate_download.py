import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CertificateDownloadPathParams:
    certificate_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'certificateId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CertificateDownloadRequest:
    path_params: CertificateDownloadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CertificateDownloadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    certificate_bundle: Optional[Any] = dataclasses.field(default=None)
    error: Optional[Any] = dataclasses.field(default=None)
    
