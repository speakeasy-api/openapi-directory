import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class AddExpiryListingsRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'text/xml' }})
    aftermarket_listing_expiry_creates: Optional[list[Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddExpiryListingsRequest:
    request: AddExpiryListingsRequests = dataclasses.field()
    

@dataclasses.dataclass
class AddExpiryListingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    aftermarket_listing_action: Optional[Any] = dataclasses.field(default=None)
    body: Optional[bytes] = dataclasses.field(default=None)
    error: Optional[Any] = dataclasses.field(default=None)
    error_limit: Optional[Any] = dataclasses.field(default=None)
    
