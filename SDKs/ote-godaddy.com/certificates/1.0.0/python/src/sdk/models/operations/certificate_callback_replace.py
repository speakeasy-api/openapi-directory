import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CertificateCallbackReplacePathParams:
    certificate_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'certificateId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CertificateCallbackReplaceQueryParams:
    callback_url: str = dataclasses.field(metadata={'query_param': { 'field_name': 'callbackUrl', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CertificateCallbackReplaceRequest:
    path_params: CertificateCallbackReplacePathParams = dataclasses.field()
    query_params: CertificateCallbackReplaceQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CertificateCallbackReplaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[Any] = dataclasses.field(default=None)
    
