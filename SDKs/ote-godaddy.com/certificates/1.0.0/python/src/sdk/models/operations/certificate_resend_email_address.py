import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CertificateResendEmailAddressPathParams:
    certificate_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'certificateId', 'style': 'simple', 'explode': False }})
    email_address: str = dataclasses.field(metadata={'path_param': { 'field_name': 'emailAddress', 'style': 'simple', 'explode': False }})
    email_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'emailId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CertificateResendEmailAddressRequest:
    path_params: CertificateResendEmailAddressPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CertificateResendEmailAddressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[Any] = dataclasses.field(default=None)
    
