import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import payeedeltaresponse as shared_payeedeltaresponse


@dataclasses.dataclass
class ListPayeeChangesV3QueryParams:
    payor_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'payorId', 'style': 'form', 'explode': True }})
    updated_since: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'updatedSince', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListPayeeChangesV3Request:
    query_params: ListPayeeChangesV3QueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListPayeeChangesV3Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    payee_delta_response: Optional[shared_payeedeltaresponse.PayeeDeltaResponse] = dataclasses.field(default=None)
    
