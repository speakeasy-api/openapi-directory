import dataclasses
from typing import Any,Optional
from enum import Enum


@dataclasses.dataclass
class CertificateSitesealGetPathParams:
    certificate_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'certificateId', 'style': 'simple', 'explode': False }})
    
class CertificateSitesealGetThemeEnum(str, Enum):
    DARK = "DARK"
    LIGHT = "LIGHT"


@dataclasses.dataclass
class CertificateSitesealGetQueryParams:
    locale: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    theme: Optional[CertificateSitesealGetThemeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'theme', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CertificateSitesealGetRequest:
    path_params: CertificateSitesealGetPathParams = dataclasses.field()
    query_params: CertificateSitesealGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CertificateSitesealGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    certificate_site_seal: Optional[Any] = dataclasses.field(default=None)
    error: Optional[Any] = dataclasses.field(default=None)
    
