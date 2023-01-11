import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CertificateCreateHeaders:
    x_market_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Market-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CertificateCreateRequest:
    headers: CertificateCreateHeaders = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CertificateCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    certificate_identifier: Optional[Any] = dataclasses.field(default=None)
    error: Optional[Any] = dataclasses.field(default=None)
    
