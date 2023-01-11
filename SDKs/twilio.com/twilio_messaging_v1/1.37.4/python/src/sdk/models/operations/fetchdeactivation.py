import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import messaging_v1_deactivation as shared_messaging_v1_deactivation


FETCH_DEACTIVATION_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclasses.dataclass
class FetchDeactivationQueryParams:
    date_: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Date', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FetchDeactivationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchDeactivationRequest:
    query_params: FetchDeactivationQueryParams = dataclasses.field()
    security: FetchDeactivationSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchDeactivationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    messaging_v1_deactivation: Optional[shared_messaging_v1_deactivation.MessagingV1Deactivation] = dataclasses.field(default=None)
    
