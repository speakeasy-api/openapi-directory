import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import security as shared_security


@dataclasses.dataclass
class UpdateTransactionPathParams:
    transaction_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'transactionNumber', 'style': 'simple', 'explode': False }})
    
class UpdateTransactionRequestBodySourceEnum(str, Enum):
    SHOP = "SHOP"

class UpdateTransactionRequestBodyStatusEnum(str, Enum):
    CANCELLED = "CANCELLED"
    CLOSED = "CLOSED"
    PENDING = "PENDING"


@dataclasses.dataclass
class UpdateTransactionRequestBody:
    active: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'active' }})
    date_closed: Optional[datetime] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'dateClosed' }})
    date_created: Optional[datetime] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'dateCreated' }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'number' }})
    payment_method: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'paymentMethod' }})
    source: Optional[UpdateTransactionRequestBodySourceEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'source' }})
    status: Optional[UpdateTransactionRequestBodyStatusEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'status' }})
    

@dataclasses.dataclass
class UpdateTransactionSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateTransactionRequest:
    path_params: UpdateTransactionPathParams = dataclasses.field()
    security: UpdateTransactionSecurity = dataclasses.field()
    request: Optional[UpdateTransactionRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class UpdateTransactionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    netlicensing: Optional[Any] = dataclasses.field(default=None)
    
