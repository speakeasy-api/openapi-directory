import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import updatepayeedetailsrequest_2 as shared_updatepayeedetailsrequest_2


@dataclasses.dataclass
class PayeeDetailsUpdateV4PathParams:
    payee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payeeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PayeeDetailsUpdateV4Request:
    path_params: PayeeDetailsUpdateV4PathParams = dataclasses.field()
    request: shared_updatepayeedetailsrequest_2.UpdatePayeeDetailsRequest2Input = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PayeeDetailsUpdateV4Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    
