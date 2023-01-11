import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CertificateEmailHistoryPathParams:
    certificate_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'certificateId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CertificateEmailHistoryRequest:
    path_params: CertificateEmailHistoryPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CertificateEmailHistoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    certificate_email_history: Optional[Any] = dataclasses.field(default=None)
    error: Optional[Any] = dataclasses.field(default=None)
    
