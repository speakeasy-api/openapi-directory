import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class CertificateValidateHeaders:
    x_market_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Market-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CertificateValidateRequest:
    headers: CertificateValidateHeaders = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CertificateValidateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[Any] = dataclasses.field(default=None)
    
