import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import createpayorlinkrequest as shared_createpayorlinkrequest


@dataclasses.dataclass
class CreatePayorLinksSecurity:
    o_auth_velo_back_office: shared_security.SchemeOAuthVeloBackOffice = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreatePayorLinksRequest:
    request: shared_createpayorlinkrequest.CreatePayorLinkRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreatePayorLinksSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreatePayorLinksResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    
