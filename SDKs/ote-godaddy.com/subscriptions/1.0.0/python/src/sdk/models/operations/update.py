import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class UpdatePathParams:
    subscription_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'text/xml' }})
    subscription_update: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    subscription_update1: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class UpdateRequest:
    path_params: UpdatePathParams = dataclasses.field()
    request: UpdateRequests = dataclasses.field()
    

@dataclasses.dataclass
class UpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error: Optional[Any] = dataclasses.field(default=None)
    
