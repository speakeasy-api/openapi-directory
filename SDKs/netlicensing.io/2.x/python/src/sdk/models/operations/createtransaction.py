import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import security as shared_security

class CreateTransactionRequestBodySourceEnum(str, Enum):
    SHOP = "SHOP"

class CreateTransactionRequestBodyStatusEnum(str, Enum):
    CANCELLED = "CANCELLED"
    CLOSED = "CLOSED"
    PENDING = "PENDING"


@dataclasses.dataclass
class CreateTransactionRequestBody:
    active: bool = dataclasses.field(metadata={'form': { 'field_name': 'active' }})
    source: CreateTransactionRequestBodySourceEnum = dataclasses.field(metadata={'form': { 'field_name': 'source' }})
    status: CreateTransactionRequestBodyStatusEnum = dataclasses.field(metadata={'form': { 'field_name': 'status' }})
    date_closed: Optional[datetime] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'dateClosed' }})
    date_created: Optional[datetime] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'dateCreated' }})
    licensee_number: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'licenseeNumber' }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'number' }})
    payment_method: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'paymentMethod' }})
    

@dataclasses.dataclass
class CreateTransactionSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateTransactionRequest:
    security: CreateTransactionSecurity = dataclasses.field()
    request: Optional[CreateTransactionRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class CreateTransactionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    netlicensing: Optional[Any] = dataclasses.field(default=None)
    
