import dataclasses
from typing import Optional
from ..shared import protectionresult as shared_protectionresult


@dataclasses.dataclass
class GetProtectionQueryParams:
    from_: float = dataclasses.field(metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    lat: float = dataclasses.field(metadata={'query_param': { 'field_name': 'lat', 'style': 'form', 'explode': True }})
    lng: float = dataclasses.field(metadata={'query_param': { 'field_name': 'lng', 'style': 'form', 'explode': True }})
    to: float = dataclasses.field(metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    alt: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    ozone: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ozone', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetProtectionHeaders:
    x_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'x-access-token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProtectionRequest:
    headers: GetProtectionHeaders = dataclasses.field()
    query_params: GetProtectionQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetProtectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protection_result: Optional[shared_protectionresult.ProtectionResult] = dataclasses.field(default=None)
    
