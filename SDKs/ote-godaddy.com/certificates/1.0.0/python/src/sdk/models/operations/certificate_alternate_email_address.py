import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CertificateAlternateEmailAddressPathParams:
    certificate_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'certificateId', 'style': 'simple', 'explode': False }})
    email_address: str = dataclasses.field(metadata={'path_param': { 'field_name': 'emailAddress', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CertificateAlternateEmailAddressRequest:
    path_params: CertificateAlternateEmailAddressPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CertificateAlternateEmailAddressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    certificate_email_history: Optional[Any] = dataclasses.field(default=None)
    error: Optional[Any] = dataclasses.field(default=None)
    
