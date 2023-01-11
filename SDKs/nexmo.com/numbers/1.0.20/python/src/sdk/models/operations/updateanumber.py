import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import number_details_update as shared_number_details_update
from ..shared import response as shared_response
from ..shared import unauthorized as shared_unauthorized


@dataclasses.dataclass
class UpdateANumberRequest:
    request: shared_number_details_update.NumberDetailsUpdate = dataclasses.field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class UpdateANumberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    response: Optional[shared_response.Response] = dataclasses.field(default=None)
    unauthorized: Optional[shared_unauthorized.Unauthorized] = dataclasses.field(default=None)
    
