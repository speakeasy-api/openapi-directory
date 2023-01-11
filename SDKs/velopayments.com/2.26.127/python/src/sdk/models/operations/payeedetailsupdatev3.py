import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import updatepayeedetailsrequest as shared_updatepayeedetailsrequest


@dataclasses.dataclass
class PayeeDetailsUpdateV3PathParams:
    payee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payeeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PayeeDetailsUpdateV3Request:
    path_params: PayeeDetailsUpdateV3PathParams = dataclasses.field()
    request: shared_updatepayeedetailsrequest.UpdatePayeeDetailsRequestInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PayeeDetailsUpdateV3Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    
