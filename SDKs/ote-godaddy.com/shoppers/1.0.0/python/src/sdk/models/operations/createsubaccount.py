import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateSubaccountRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'text/xml' }})
    subaccount_create: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateSubaccountRequest:
    request: CreateSubaccountRequests = dataclasses.field()
    

@dataclasses.dataclass
class CreateSubaccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error: Optional[Any] = dataclasses.field(default=None)
    error_limit: Optional[Any] = dataclasses.field(default=None)
    shopper_id: Optional[Any] = dataclasses.field(default=None)
    
